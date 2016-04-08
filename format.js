window.onload = function () {
    // var textString = preText.innerHTML;
    // var lineArray = textString.split("\n");

    // var newText = ""

    // for (i = lineArray.length-1; i >= 0; i--){
    //     newText += lineArray[i] + "\n"
    // }

    var rawText = document.getElementsByTagName("pre")[0].innerHTML;

    //Replacing <pre> area with white space
    document.getElementsByTagName("pre")[0].innerHTML = " ";
    
    // Inserting html elements into content area
	var s = '  \ <head> \
    <meta charset="utf-8"> \
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
    <title>Degree Audit Report</title> \
    <meta name="description" content="Degree Audit Report"> \
    <meta name="creator" content="ADI Labs, Degree Audit Report Team"> \
    <link href=\'https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900\' rel=\'stylesheet\' type=\'text/css\'> \
    <link rel="stylesheet" href="http:/ /cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"> \
    <!-- style import --> \
    <!--<link rel="stylesheet" type="text/css" href="css/reset.css"> \
    <link rel="stylesheet" type="text/css" href="css/style.css">--> \
    <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> \
    <link rel="stylesheet" type="text/css" href="css/style.css"> \
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous"> \
    <style> \
            html, body \
      		{ \
        	font-family: Raleway; \
      		} \
      		.table \
            { \
		        width: 95%; \
		        max-width: 100%; \
		        margin-bottom: 20px; \
		        margin-left: 2.5%; \
		        margin-right: 2.5%; \
		    } \
		    .table-bordered th \
		    { \
		      text-align: center; \
		    } \
		    .table-bordered th, \
		    .table-bordered td \
		    { \
		      background-color: #FFF; \
		    } \
            footer \
		    { \
		      font-size: 1rem; \
		      color: #4c4c4c; \
		      position: relative; \
		      margin-top: 1rem; \
		      margin-bottom: 1rem; \
		      text-align: center; \
		    } \
    </style> \
    <!-- link style --> \
    <script>(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');ga(\'create\', \'UA-50221324-4\', \'auto\'); ga(\'send\', \'pageview\');</script> \
  	</head> \
	<center> <h1> Degree Audit </h1> </center> \
    <section> \
      <!--List of Completed Courses--> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="8"> List of Completed Courses </th> \
          </tr> \
          <tr> \
            <th>Course Title</th> \
            <th>Semester</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Section</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
         \
        </thead> \
        <tbody id="courseTable"> \
        </tbody> \
      </table> \
      \
      <!--Progress Bar. Modified by style width-->\
      <center> <h4> Progress Bar </h4> </center> \
      <div class="progress table"> \
        <div class="progress-bar progress-bar-striped active" role="progressbar" id="progressBar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" width> \
    <span id="progress-bar-text"></span> \
        </div> \
      </div> \
    </section> \
    <br> \ '; // HTML string

	var div = document.createElement('div');
	div.innerHTML = s;

	var replace = document.getElementById("Content");
	replace.appendChild(div);

	var audit = rawText.split(`NO     *****         SUMMARY OF DEGREE REQUIREMENTS         *****`);
	var summary = audit[1].split('\n                                                                 \n');
	var courseList = summary[1].split('\n').map(function(x){return x.trim()}).map(x => x.split("   ")).filter(x => x.length === 2);

	for (i = 0; i < courseList.length; i++) { 
        var courseRow = document.createElement('tr');
        var details = courseList[i][0].split(' ');

        var courseTitle = courseList[i][1];
        var courseTitleData = document.createElement('td');
        var courseTitleText = document.createTextNode(courseTitle);
        courseTitleData.appendChild(courseTitleText);
        courseRow.appendChild(courseTitleData);
	    
        var semester = details[0];
        var semesterData = document.createElement('td');
        var semesterText = document.createTextNode(semester);
        semesterData.appendChild(semesterText);
        courseRow.appendChild(semesterData);
	    
        var department = details[1];
        var departmentData = document.createElement('td');
        var departmentText = document.createTextNode(department);
        departmentData.appendChild(departmentText);
        courseRow.appendChild(departmentData);

	    var courseNumber = details[2];
        var courseNumberData = document.createElement('td');
        var courseNumberText = document.createTextNode(courseNumber);
        courseNumberData.appendChild(courseNumberText);
        courseRow.appendChild(courseNumberData);

	    var section = details[4];
        var sectionData = document.createElement('td');
        var sectionText = document.createTextNode(section);
        sectionData.appendChild(sectionText);
        courseRow.appendChild(sectionData);

        //had to skip index 5, because it's whitespace there

	    var credit = details[6];
        var creditData = document.createElement('td');
        var creditText = document.createTextNode(credit);
        creditData.appendChild(creditText);
        courseRow.appendChild(creditData);

	    var grade = details[7];
        var gradeData = document.createElement('td');
        var gradeText = document.createTextNode(grade);
        gradeData.appendChild(gradeText);
        courseRow.appendChild(gradeData);

        var statusData = document.createElement('td');
        if (grade != 'IP') {
            var statusImg = document.createElement('img');
            statusImg.src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";
            statusImg.setAttribute('width','20');
            statusImg.setAttribute('height','20');
            statusData.appendChild(statusImg);
        } else {
            var statusEmpty = document.createTextNode(" ");
            statusData.appendChild(statusEmpty);
        }
        courseRow.appendChild(statusData);

        document.getElementById('courseTable').appendChild(courseRow);

        //Modifying the progress bar 
        var pointsList = summary[0].split('\n');
        var pEarnedArray = pointsList[6].trim().split(' ');
        var pointsEarned = parseFloat(pEarnedArray[2]);
        var pEarningArray = pointsList[7].trim().split(' ');
        var pointsEarning = parseFloat(pEarningArray[3]);
        var pointsAccumulated = pointsEarned + pointsEarning;
        var percentage = ((pointsAccumulated / 124)*100).toFixed(2);
        percentage = percentage.toString() + '%';
        var progressBar = document.getElementById('progressBar');
        progressBar.setAttribute('style', 'width:' + percentage);
        var percentageText = document.createTextNode(percentage);
        var barText = document.getElementById('progress-bar-text');
        barText.appendChild(percentageText);
	}
}
