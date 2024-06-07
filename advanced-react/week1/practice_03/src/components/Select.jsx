const jobs = [
  "Your profession",
  "Doctor",
  "Engineer",
  "Teacher",
  "Lawyer",
  "Accountant",
  "Architect",
  "Pharmacist",
];

const Select = ({ job, setJob }) => {
  return (
    <select value={job} onChange={(e) => setJob(e.target.value)}>
      {jobs.map((job) => (
        <option value={job} key={job}>
          {job}
        </option>
      ))}
    </select>
  );
};

export default Select;
