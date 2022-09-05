export type TypeTransactionProps = 'payment' | 'getOut'

export interface TransactionsProps {
  type: TypeTransactionProps
  plate: string
}
