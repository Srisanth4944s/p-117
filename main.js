quick_draw_data_set =["airplane","alarm clock","apple","axe","banana","bandage"," ","basketball","bathtub","bear","beard","bed","bicycle","binoculars","bird","birthday cake"];
random_no = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_no]);

sketch= quick_draw_data_set[random_no];
document.getElementById("sketch_to_be_drawn").innerHTML= "Sketch to be drawn: "+ sketch;

timer_counter= 0;
timer_check="";
drawn_sketch="";
answer_holder= "";
score=0;