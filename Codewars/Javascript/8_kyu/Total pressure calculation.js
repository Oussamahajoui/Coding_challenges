// Description:
// Given the molecular mass of two molecules M1 and M 2, their masses present
// m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure
// P total exerted by the molecules.

// My Solution:
solution = (M1, M2, m1, m2, V, T) => {
    M1 = m1 * 0.001 / M1;
    M2 = m2 * 0.001 / M2;
    T = T + 273.15;
    const R = 0.082;

    return (((M1 + M2) * R * T) / V) * 1000;
}