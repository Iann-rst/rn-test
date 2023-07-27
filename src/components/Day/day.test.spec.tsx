import { Day } from "@components/Day"
import { render, screen } from "@testing-library/react-native"

import clearDay from '@assets/clear_day.svg'

describe("Component: Day", ()=>{
  it("should be render day", ()=>{
    render(
      <Day
        data={{
          day: '27/07',
          min: '30ºc',
          max: '34ºc',
          icon: clearDay,
          weather: 'Céu limpo'
        }}
      />
    )

    expect(screen.getByText('27/07')).toBeTruthy()
  })
})