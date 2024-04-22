$(document).ready(function () {
    // Hier wird der Hundeknopf programmiert:
    $(".buttonDogs").click(function () {
        // Wähle das Div aus, welches ausgeblendet werden soll
        $().hide();
        // Wähle das Div aus, welches angezeigt werden soll
        $().show();
        
        // Wähle den Knopf aus, welches ausgewählt werden soll
        $().addClass('active');
        // Wähle die Knöpfe aus, die nicht mehr ausgewählt sind
        $().removeClass('active');
        $().removeClass('active');
    });
  
    // Hier wird der Katzenknopf programmiert:
    $(".buttonCats").click(function () {
        // Wähle das Div aus, welches ausgeblendet werden soll
        $().hide();
        // Wähle das Div aus, welches angezeigt werden soll
        $().show();

        // Wähle den Knopf aus, welches ausgewählt werden soll
        $().addClass('active');
        // Wähle die Knöpfe aus, die nicht mehr ausgewählt sind
        $().removeClass('active');
        $().removeClass('active');
    });
  
  
    // Hier wird der Knopf programmiert, der alles anzeigt:
    $(".buttonAll").click(function () {
        // Wähle beide Div-Elemente aus, die angezeigt werden sollen
        $().show();
        $().show();
        
        // Wähle den Knopf aus, welches ausgewählt werden soll
        $().addClass('active');
        // Wähle die Knöpfe aus, die nicht mehr ausgewählt sind
        $().removeClass('active');
        $().removeClass('active');
    });
});
