export const getMenuShiftedRight = (
  width: number
): { shiftedRight: number } => {
  const getPositiveDiffBetweeenWidths = width - 1920
  if (getPositiveDiffBetweeenWidths > 0) {
    return {
      shiftedRight: getPositiveDiffBetweeenWidths / 2,
    }
  } else {
    return {
      shiftedRight: 0,
    }
  }
}
