import CommonTable from "@/Common/Table/Table"
import Input from "@/UI/Form/Input/Input"
import Select from "@/UI/Form/Select/Select"

const Table: React.FC = ({ }): JSX.Element => {
  const grid = {
    headers: [
      {
        id: 'City',
        value: 'City',
      },
      {
        id: 'Temparature max',
        value: 'Temparature max',
      },
      {
        id: 'Temparature min',
        value: 'Temparature min',
      },
      {
        id: 'Wind direction',
        value: 'Wind direction',
      },
    ],
    rows: [
      {
        columns: [
          {
            id: 'Kyiv',
            value: 'Kyiv',
          },
          {
            id: '1',
            value: '3',
          },
          {
            id: '2',
            value: '0',
          },
          {
            id: '3',
            value: '0',
          },
        ],
      },
      {
        columns: [
          {
            id: 'Dnipro',
            value: 'Dnipro',
          },
          {
            id: '4',
            value: '3',
          },
          {
            id: '5',
            value: '0',
          },
          {
            id: '6',
            value: '0',
          },
        ],
      },
      {
        columns: [
          {
            id: 'Odessa',
            value: 'Odessa',
          },
          {
            id: '7',
            value: '3',
          },
          {
            id: '8',
            value: '0',
          },
          {
            id: '9',
            value: '0',
          },
        ],
      },
    ],
  }

  const filters = [
    {
      FilterComponent: () => {
        const onSelect = () => {}

        const options = [
          {
            value: 'Ukraine',
            label: 'Ukrain',
          },
          {
            value: 'Poland',
            label: 'Poland',
          },
        ]

        return <Select placeholder="Country" onSelect={onSelect} options={options} />
      },
    },
    {
      FilterComponent: () => <Input type="text" placeholder="Min" />,
    },
    {
      FilterComponent: () => <Input type="text" placeholder="Max" />,
    },
  ]

  return <CommonTable grid={grid} filters={filters} />
}

export default Table
