package exercises

object ValuesVariablesTypes extends App{

  // Primitive Types
  val myName: String = "Tanner Barcelos"
  val myAge: Int = 27;
  val isOlderThan21: Boolean = myAge > 21
  val aChar: Char = 'a'; // note the single quotes. A string would be in ""
  val aShort: Short = 5000;
  val aLong: Long = 3881930198239L //L tells compiler this is a long
  val aFloat: Float = 2.89f  // f tells compiler this is a float (works without)

  var occupation: String = "Fullstack Software Engineer"

  // Printing
  print("Full Name: " + myName, " Age: " +  myAge, " Is older than 21: " + isOlderThan21, " Occupation: " + occupation)

  /* NOTE
  *
  * var - a variable that CAN change (mutable)
  * val - a variable that CANNOT change (immutable)
  *
  * Scala is a functional-first programming language. Like in JS/TS, we think in terms of constants a lot more because
  * functional programming is more flexible. Therefore, WE WILL USE VAL AS MUCH AS POSSIBLE
  *
  */
}