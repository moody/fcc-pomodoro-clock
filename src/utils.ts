/**
 * Converts minutes into seconds.
 * @param minutes
 */
export const minutesToSeconds = (minutes: number) => Math.max(0, minutes * 60);

/**
 * Returns the seconds as an "MM:SS" string.
 * @param seconds
 */
export const formatSeconds = (seconds: number) => {
  let mm = Math.min(60, Math.max(0, seconds / 60));
  let ss = Math.round((mm - Math.trunc(mm)) * 60);
  mm = Math.trunc(mm);
  return `${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`;
};
