var ELEMENT = 1;
var DOCUMENT = 9;
var DOCUMENT_FRAGMENT = 11;
var TEXT = 3;

// Enter things that you'd like to replace
// var MATCH = ['computer','person'];
// var REPLACE = ['robot','cantaloupe'];

// walk(document.body);

// function walk(node) {
//     // Function from here for replacing text: http://is.gd/mwZp7E

//     var child, next;

//     switch (node.nodeType) {
//         case ELEMENT:  // Element
//         case DOCUMENT:  // Document
//         case DOCUMENT_FRAGMENT: // Document fragment
//             child = node.firstChild;
//             while (child) {
//                 next = child.nextSibling;
//                 walk(child);
//                 child = next;
//             }
//             break;

//         case TEXT: // Text node
//             replaceText(node);
//             break;
//     }
// }

// function replaceText(textNode) {
//     var v = textNode.nodeValue;

//     // Go through and match/replace all the strings we've given it, using RegExp.
//     for (var i = 0; i < MATCH.length; i++) {
//         v = v.replace(new RegExp('\\b' + MATCH[i] + '\\b', 'g'), REPLACE[i]);
//     }

//     textNode.nodeValue = v;
// }
window.onload = function () {
    var preText = document.getElementsByTagName("pre")[0];
    var textString = preText.innerHTML;
    var lineArray = textString.split("\n");

    var newText = ""

    for (i = lineArray.length-1; i >= 0; i--){
        newText += lineArray[i] + "\n"
    }

    //Replacing <pre> area with white space
    document.getElementsByTagName("pre")[0].innerHTML = " ";
    
    // Inserting html elements into content area
	var s = '  \<center> <h1> Degree Audit </h1> </center> \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> 9 ways of knowing </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
    <br> \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Major Requirements </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Minor Requirements </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section>     \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7"> Transfer/ AP Credits </th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
        </tbody> \
      </table> \
    </section> \
 \
    <br> \
 \
    <section> \
      <table class="table table-bordered"> \
        <thead> \
          <tr> \
            <!-- edited bootstrap.css #2264--> \
            <th colspan="7">List of Completed Courses</th> \
          </tr> \
          <tr> \
            <th>Requirement</th> \
            <th>Department</th> \
            <th>Course Number</th> \
            <th>Course Title</th> \
            <th>Credit</th> \
            <th>Grade</th> \
            <th>Status</th> \
          </tr> \
        </thead> \
        <tbody> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
          <tr> \
            <td>First Year English</td> \
            <td>ENGL</td> \
            <td>BC1201</td> \
            <td>Legacy of the Med.</td> \
            <td>3</td> \
            <td>A+</td> \
            <td><center><img src=http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png width="20" height="20"></center></td> \
          </tr> \
        </tbody> \
      </table> \
    </section>'; // HTML string

	var div = document.createElement('div');
	div.innerHTML = s;

	var replace = document.getElementById("Content");
	replace.appendChild(div);

}
