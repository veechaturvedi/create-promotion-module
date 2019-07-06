    $(function() {
        //for tooltip
        $('[data-toggle="tooltip"]').tooltip();


        $('#offercashback, #promote-item2').on('click', function(e) {
            e.stopPropagation();
            if (this.id == 'offercashback') {
                $('#collapsecashback').collapse('show');
                $('#collapseitem').collapse('hide');
            } else if (this.id == 'promote-item2') {
                $('#collapsecashback').collapse('hide');
                $('#collapseitem').collapse('show');
            }
        });

        $('#Ontotal, #onCertainItem').on('click', function(e) {
            e.stopPropagation();
            if (this.id == 'Ontotal') {
                $('#collapsetotalitem').collapse('show');
                $('#collapsecertainitem').collapse('hide');
            } else if (this.id == 'onCertainItem') {
                $('#collapsetotalitem').collapse('hide');
                $('#collapsecertainitem').collapse('show');
            }
        });

        $('#pastcustomer, #upcomingcustomer').on('click', function(e) {
            e.stopPropagation();
            if (this.id == 'pastcustomer') {
                $('#collapsepastcustomer').collapse('show');
                $('#collapseupcomingcustoemr').collapse('hide');
            } else if (this.id == 'upcomingcustomer') {
                $('#collapsepastcustomer').collapse('hide');
                $('#collapseupcomingcustoemr').collapse('show');
            }
        });



        //multi select
        //https://www.jqueryscript.net/form/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect.html
        //Demo:https://www.jqueryscript.net/demo/jQuery-Multiple-Select-Plugin-For-Bootstrap-Bootstrap-Multiselect/
        $('#select-day1, #select-day2, #select-day3, #select-day4, #select-day5, #select-day6').multiselect({
            includeSelectAllOption: true
        });
    });