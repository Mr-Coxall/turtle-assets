let myTurtle = turtle.fromSprite(sprites.create(assets.image`myImage`, SpriteKind.Player))
myTurtle.moveDirection(TurtleDirection.Backward, 25)
myTurtle.turnDirectionByDegrees(TurtleTurnDirection.Right, 90)
myTurtle.moveDirection(TurtleDirection.Forward, 25)
