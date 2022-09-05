describe('unit test to validatePlate function', () => {

  test('should return true when plate parameter is valid', () => {
    const plate = 'AAA-1234';

    expect(plate?.length).toEqual(8)
    expect(plate).not.toMatch(/_/)
  })

  test('should return false when plate parameter is not valid', () => {
    const plate = 'AAA-123_';

    expect(plate?.length).toEqual(8)
    expect(plate).toMatch(/_/)
  })

})

export = {}
