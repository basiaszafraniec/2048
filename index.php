<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2048</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            margin: 0;
            background-color: beige;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            flex-direction: column;
        }
        .header{
            background-color: white;
            margin-bottom: 5vh;
            border-radius: 2vh;
        }
        .container{
            background-color: white;
            display: grid;
            grid-template-columns: repeat(4,25%);
            grid-template-rows: repeat(4,25%);
            
            justify-items: center;
            align-content: center;
            border-radius: 2vh;
        }
        .box {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;        
        }
        .tile{
            background-color: orange;
            height: 95%;
            width: 95%;
            border-radius: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>

<body>
    <script src="script.js"></script>
</body>

</html>