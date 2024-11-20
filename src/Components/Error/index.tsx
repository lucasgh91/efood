import { ErrorStylized } from './styles'

type Props = {
  children: string
}

const Error = ({ children }: Props) => (
  <ErrorStylized>
    <h1>{children}</h1>
  </ErrorStylized>
)
export default Error
