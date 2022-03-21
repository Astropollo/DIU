/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.PaquitoGaming";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/Astropollo/DIU";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ángela Martinez",
                Photo: "chica.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Su grupo de amigos planea realizar un viaje juntos",
                touch1: "calendario",
                feel1: "5",
                con1: "Tienen que encontrar una época del año que les venga bien a todos. Como estudian la misma carrera no les es difícil, tienen las mismas fiestas. ",
                ima1: "cartoon-teamthinking.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Investigando en internet llegan a la conclusión de que Granada es un buen sitio al que viajar",
                touch2: "ordenador",
                feel2: "2",
                con2: "Hay muchas opciones disponibles, por lo que la búsqueda se hace muy pesada.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Deciden que un hostal es la mejor opción por la variedad de actividades que ofrecen y el precio asequible",
                touch3: "ordenador",
                feel3: "3",
                con3: "Ahora tiene que visitar las páginas de los diferentes hostels en Granada (que son bastantes) y se hace tedioso",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Investigan las diferentes opciones que tienen para llegar hasta el hostal seleccionado",
                touch4: "ordenador",
                feel4: "4",
                con4: "La gasolina está cara, por lo que tienen que considerar opciones que no sean vehículos propios.",
                ima4: "cartoon-PChappy.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Cuando llegan al hostal les comunican que ha habido un cambio de última hora en las habitaciones y se van a tener que repartir en dos grupos",
                touch5: "boca a boca",
                feel5: "1",
                con5: "La ruptura de los planes planteados genera descontento",
                ima5: "cartoon-talking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Concluyen sus vacaciones en Granada y realizan muchas actividades al final.",
                touch6: "físico",
                feel6: "3",
                con6: "La experiencia ha sido agradable, pero el cambio de habitaciones en último momento no le ha sentado nada bien al grupo",
                ima6: "cartoon-resting.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Alberto Nodales",
                Photo: "chico.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere aprovechar el puente de andalucia para salir un poco de la rutina",
                touch1: "agenda",
                feel1: "4",
                con1: "Quiere ahorrar para estudiar agente de cabina",
                ima1: "cartoon-going.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Su compañero de piso le cuenta de una nueva forma de viajar barato y conocer gente(hostel)",
                touch2: "Boca a boca (amigo)",
                feel2: "4",
                con2: "Tiene que escoger todavia un destino no muy caro y decidir a cual ir",
                ima2: "cartoon-teamthinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide ir a granada que todavia no a ido y encuentra una pagina muy buena de buscador de hostels",
                touch3: "buscador muy comodo de hostels(hostelworld)",
                feel3: "4",
                con3: "Tiene que buscar alguna forma de llegar hasta granada barata",
                ima3: "cartoon-phoningangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca un hostel cerca del centro en el buscador y un metodo de transporte comodo y barato",
                touch4: "Móvil (webapp)",
                feel4: "3",
                con4: "Se decide por uno de los destacados y que cuesta menos dinero tras perder mucho tiempo mirando, no encuentra ningun metodo comodo y barato para llegar y termina cogiendose un bus de varias horas",
                ima4: "cartoon-phone-street.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Llega al hostel y descubre un gran ambiente juvenil y jovial que le quita los nervios de esta nueva experiencia",
                touch5: "Fisico",
                feel5: "5",
                con5: "Tuvo que coger un autobus para llegar desde la estacion hasta el hostel",
                ima5: "cartoon-phone-sitting.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Ha pasado un fin de semana alucinante y ha conocido a mucha gente nueva con la que espera seguir en contacto",
                touch6: "Fisico",
                feel6: "2",
                con6: "No encuentra una de sus camisas, puede que alguien se haya equivocado o que se la hallan cogido. Tiene que volverse a coger el bus interminable hasta casa",
                ima6: "cartoon-PChard.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



