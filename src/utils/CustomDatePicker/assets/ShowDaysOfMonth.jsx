const ShowDaysofMonth = ({ month, year }) => {
  const days = new Date(year, month, 0).getDate();
  const daysArray = [];

  for (let i = 1; i <= days; i++) {
    daysArray.push(i);
  }

  return (
    <div className='grid grid-cols-7'>
      {daysArray.map((day, i) => (
        <p onClick={() => console.log(month, day, year)} key={i}>
          {day}
        </p>
      ))}
    </div>
  );
};

export default ShowDaysofMonth;
