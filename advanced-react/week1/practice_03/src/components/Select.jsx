const jobs = [
  "Doctor",
  "Engineer",
  "Teacher",
  "Lawyer",
  "Accountant",
  "Architect",
  "Pharmacist",
];

const Select = () => {
  return (
    <select name="" id="">
      {jobs.map((job) => (
        <option value={job} key={job}>
          {job}
        </option>
      ))}
    </select>
  );
};

export default Select;
