// ...existing code...
import { Button, Stack, CircularProgress, Typography, Box } from '@mui/material'
import type { PropsWithChildren, ReactNode } from 'react'

export type LoadingStates = 'loading' | 'error' | 'idle'

interface Props<D> extends PropsWithChildren {
	items?: D[]
	loadingState: LoadingStates
	slots?: {
		noData?: ReactNode
		error?: ReactNode
		loading?: ReactNode
		nextLoading?: ReactNode
	}
	onRetry?: () => void
	onLoadNext?: () => void
}

export default function SimpleList<D>({
	items = [],
	loadingState,
	children,
	slots,
	onRetry,
	onLoadNext,
}: Props<D>) {
	if (items.length > 0) {
		return (
			<Stack spacing={2} position="relative">
				<Box sx={{ w: 1 }}>{children}</Box>

				{(() => {
					if (loadingState === 'loading') {
						return (
							slots?.nextLoading ?? (
								<Stack alignItems="center" py={2}>
									<CircularProgress size={28} />
								</Stack>
							)
						)
					}

					if (loadingState === 'error') {
						return (
							slots?.error ?? (
								<Stack alignItems="center" py={2}>
									<Button variant="text" onClick={onLoadNext}>
										Load more
									</Button>
								</Stack>
							)
						)
					}

					return (
						<Stack alignItems="center" py={2}>
							<Button variant="text" onClick={onLoadNext}>
								Load more
							</Button>
						</Stack>
					)
				})()}
			</Stack>
		)
	}

	if (loadingState === 'loading') {
		return (
			slots?.loading ?? (
				<Stack alignItems="center" justifyContent="center" p={6}>
					<CircularProgress />
				</Stack>
			)
		)
	}

	if (loadingState === 'error') {
		return (
			slots?.error ?? (
				<Box textAlign="center" p={4}>
					<Typography variant="h6" gutterBottom>
						Something went wrong
					</Typography>
					<Button variant="outlined" onClick={onRetry}>
						Retry
					</Button>
				</Box>
			)
		)
	}

	return (
		slots?.noData ?? (
			<Box textAlign="center" p={4}>
				<Typography variant="body1">No items</Typography>
			</Box>
		)
	)
}
