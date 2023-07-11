import CommonChart from "@/Common/Chart/Chart"

const Chart: React.FC = ({ }): JSX.Element => {
  const yAxis = {
    items: [0, 10, 20, 30, 40, 50, 60, 70, 80].map((num) => ({ label: num.toString() })),
    max: 80,
    pattern: '{{num}}℃' as const,
  }

  const xAxis = {
    items: [
      {
        rate: 10,
        label: 'Mon',
      },
      {
        rate: 9,
        label: 'Tue',
      },
      {
        rate: 8,
        label: 'Wed',
      },
      {
        rate: 1,
        label: 'Thu',
      },
      {
        rate: 7,
        label: 'Fri',
      },
      {
        rate: 2,
        label: 'Sat',
      },
      {
        rate: 4,
        label: 'Sun',
      },
    ],
  }

  return (
    <CommonChart title="Analytics" valueName="Temparature" yAxis={yAxis} xAxis={xAxis} />
  )
}

export default Chart
