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
            height: 100vh;
            flex-direction: column;
        }
        .header{
            height: 150px;
            width: 450px;
            background-color: white;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .container{
            /* height: 450px;
            width: 450px; */
            background-color: white;
            display: grid;
            grid-template-columns: repeat(4,1fr);
            justify-items: center;
            align-content: center;
            border-radius: 10px;
        }
        .tile{
            /* width: 100px;
            height: 100px; */
            background-color: pink;
            /* margin: 10px; */
            border-radius: 5px;
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