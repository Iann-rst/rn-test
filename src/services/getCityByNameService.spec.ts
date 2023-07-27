import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("API: getCityByNameService", ()=>{
  it("should return city details", async ()=>{
    const data = {
      id: '1',
      name: 'Barreiras',
      sys: {
        country: 'BR'
      },
      coord: {
        lat: 123,
        lon: 456
      }
    };

    jest.spyOn(api, "get").mockResolvedValue({data}); // fica observando as requisições feita na api
    const response = await getCityByNameService('Barreiras')

   expect(response.length).toBeGreaterThan(0);
  
  })
})