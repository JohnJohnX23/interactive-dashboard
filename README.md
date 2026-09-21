# Interactive Productivity Dashboard
"This project is a web-based dashboard built for WEB-115 to demonstrate interactive Javascript features'
## TODO: Future Enhancements
- [ ] Add a metric conversion tool
- [ ] Integrate a task list with array storage.
- [ ] add JavaScript logic for a live clock
- [x] add a weekly task goal calculator

## Weekly Task Goals
Weekly task goals calculates daily goals by the days in the work week and adds bonus task to that total as well.

## Imperial/Metric Converter
This application converts one unit of measure to another and displays the results
BEGIN
INPUT number
SET Number = number
INPUT current unit
SET UNIT1 = current unit
INPUT conversion unit
SET UNIT2 = conversion unit

IF UNIT1 is "inch"
	SET Result = number * 2.54
	
IF UNIT1 is "foot"
	SET Result = number * 30.48
IF UNIT1 is "yard"
	SET Result = number * .91
IF UNIT1 = "mile"
	SET Result = number * 1.61

IF UNIT1 = centimeter
	IF UNIT2 = "inch"
		SET Result = number * .39
	else
		SET Result = number * 0.0328
IF UNIT1 = "meter"
	Result = number * 1.09
IF UNIT1 = "kilometer"
	SET Result = number * .62

Display Result, UNIT2
