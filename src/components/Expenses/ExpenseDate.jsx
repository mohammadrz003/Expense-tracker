function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="rounded p-2 text-[#F7F7F7] min-w-[6rem] text-center bg-[#0F4471]">
      <span className="block text-sm">{month}</span>
      <span className="block text-sm">{year}</span>
      <span className="block text-lg">{day}</span>
    </div>
  );
}

export default ExpenseDate;
