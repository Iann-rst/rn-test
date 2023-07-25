import { SelectList } from '@components/SelectList';
import { fireEvent, render, screen } from '@testing-library/react-native';

describe("Component: SelectList", ()=>{
  it("should be return city details selected", ()=>{
    const data = [
      {id: '1', name: 'Barreiras', latitude: 123, longitude: 456},
      {id: '2', name: 'Campinas', latitude: 789, longitude: 987},
    ]

    const onPress = jest.fn(); // Mock da função de onPress

    render(
      <SelectList 
        data={data}
        onChange={()=>{}}
        onPress={onPress}
      />
    )

    const selectedCity = screen.getByText(/barreiras/i); //Ignora o case-sensitive
    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[0]);
  });

  it('not should be show options when data props is empty.', ()=>{
    render(<SelectList data={[]} onChange={()=>{}} onPress={()=>{}}/>)

    const options = screen.getByTestId('options');

   expect(options.children).toHaveLength(0);

  })
});