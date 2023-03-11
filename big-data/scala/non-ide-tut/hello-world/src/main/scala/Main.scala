@main def hello: Unit = 
  println("Hello world!")
  println(msg)
  println("My name is " + myName)

def msg = "I was compiled by Scala 3. :)"

val myName: String = "Tanner";