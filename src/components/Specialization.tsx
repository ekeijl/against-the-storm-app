export const Specialization = ({ children }: { children: string }) => {
  return (
    <img
      title={children}
      src={`img/specialization/${children}.png`}
      className="specialization"
    />
  );
};
