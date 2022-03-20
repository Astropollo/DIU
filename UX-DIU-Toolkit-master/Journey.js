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
		$scope.Grupo_ID ="DIU1.ABCDEF";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
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
                goal1: "Sus amigos la han invitado a ir a Granada de viaje y buscan lugar donde hospedarse y actividades que hacer",
                touch1: "calendario",
                feel1: "5",
                con1: "Tienen que encontrar una época del año que les venga bien a todos. Como estudian la misma carrera no les es difícil, tienen las mismas fiestas. ",
                ima1: "cartoon-planning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en internet qué hospedajes hay en Granada y alrededores",
                touch2: "ordenador",
                feel2: "2",
                con2: "Hay muchas opciones disponibles, por lo que la búsqueda se hace muy pesada.",
                ima2: "cartoon-PCangry.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decide que un hostel es la mejor opción para ella y sus amigos por la variedad de actividades que ofrecen",
                touch3: "ordenador",
                feel3: "3",
                con3: "Ahora tiene que visitar las páginas de los diferentes hostels en Granada (que son bastantes) y se hace tedioso",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca las actividades que proporciona cada hostel al gusto del grupo",
                touch4: "ordenador",
                feel4: "4",
                con4: "Muchos hostales proporcionan muchas actividades diferentes y no tienen tiempo para todas.",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Encuentra varias opciones que se ajustan bastante a lo que buscan",
                touch5: "móvil",
                feel5: "3",
                con5: "Manda un mensaje por el grupo que tiene con sus amigos contándoles lo que ha encontrado y tiene que esperar a que le respondan sobre sus opiniones.",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "El grupo se decide por un hostel",
                touch6: "ordenador",
                feel6: "4",
                con6: "No saben exactamente a qué actividades se van a apuntar todavía.",
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



