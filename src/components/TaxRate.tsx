
interface Props {
    rate: Number;
    metro: string;
}

const TaxRate = ({metro, rate}: Props) => {
  return (
    <div>TaxRate for {metro+": "+rate} </div>
  )
}

export default TaxRate