import { NextDays } from "@components/NextDays"
import { render, screen } from "@testing-library/react-native"

import clearDay from '@assets/clear_day.svg'

describe("Component: NextDays", ()=>{
  it("should be render NextDays.", ()=>{
    render(
      <NextDays
        data={[
          {day: '27/07', min: '30ºc', max: '34ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '28/07', min: '22ºc', max: '30ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '29/07', min: '22ºc', max: '30ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '30/07', min: '22ºc', max: '30ºc', icon: clearDay, weather: 'Céu limpo'},
          {day: '31/07', min: '22ºc', max: '30ºc', icon: clearDay, weather: 'Céu limpo'}
        ]}
      />
    )

    expect(screen.getByText('31/07')).toBeTruthy()
  })
})