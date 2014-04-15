
app.service('resourcesService', function () {
    this.getResources = function () {
        return resources;
    };

    this.insertResource = function (firstName, lastName, role) {
        var topID = resources.length + 1;
        resources.push({
            id: topID,
            firstName: firstName,
            lastName: lastName,
            role: role
        });
    };

    this.deleteResource = function (id) {
        for (var i = resources.length - 1; i >= 0; i--) {
            if (resources[i].id === id) {
                resources.splice(i, 1);
                break;
            }
        }
    };

    this.getResource = function (id) {
        for (var i = 0; i < resources.length; i++) {
            if (resources[i].id === id) {
                return resources[i];
            }
        }
        return null;
    };

    this.toggleInputForm = function(inputFormState){
      if(inputFormState)
        this.inputFormState = false;
      else
        this.inputFormState = true;
    };

    this.togglePerfChart = function(perfChartState){
      if(perfChartState)
        this.perfChartState = false;
       else
        this.perfChartState = true;
    };

    this.roleStyle = function(id){
      var resource = getResource(id);
        return "card" + resource.role;

    };

    var resources = [
        {
            id: 1, firstName: 'Lee', lastName: 'Carroll', address: '1234 Anywhere St.', city: 'Phoenix',
            role: 'Manager',
            orders: [
                { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
                { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
                { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
            ]
        },
        {
            id: 2, firstName: 'Jesse', lastName: 'Hawkins', address: '89 W. Center St.', city: 'Atlanta',
            role: 'Manager',
            orders: [
                { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
                { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
                { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 }
            ]
        },
        {
            id: 3, firstName: 'Charles', lastName: 'Sutton', address: '455 7th Ave.', city: 'Quebec',
            role: 'Manager',
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        },
        {
            id: 4, firstName: 'Albert', lastName: 'Einstein', address: '8966 N. Crescent Dr.', city: 'New York City',
            role: 'Developer',
            orders: [
                { product: 'Baseball', price: 9.99, quantity: 5, orderTotal: 49.95 },
                { product: 'Bat', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 5, firstName: 'Sonya', lastName: 'Williams', address: '55 S. Hollywood Blvd', city: 'Los Angeles',
            role: 'Developer'
        },
        {
            id: 6, firstName: 'Victor', lastName: 'Bryan', address: '563 N. Rainier St.', city: 'Seattle',
            role: 'Developer',
            orders: [
                { product: 'Speakers', price: 499.99, quantity: 1, orderTotal: 499.99 },
                { product: 'iPod', price: 399.99, quantity: 1, orderTotal: 399.99 }
            ]
        },
        {
            id: 7, firstName: 'Lynette', lastName: 'Gonzalez', address: '25624 Main St.', city: 'Albuquerque',
            role: 'Developer',
            orders: [
                { product: 'Statue', price: 429.99, quantity: 1, orderTotal: 429.99 },
                { product: 'Picture', price: 1029.99, quantity: 1, orderTotal: 1029.99 }
            ]
        },
        {
            id: 8, firstName: 'Erick', lastName: 'Pittman', address: '33 S. Lake Blvd', city: 'Chicago',
            role: 'Developer',
            orders: [
                { product: 'Book: AngularJS Development', price: 39.99, quantity: 1, orderTotal: 39.99 },
                { product: 'Book: Basket Weaving Made Simple', price: 19.99, quantity: 1, orderTotal: 19.99 }
            ]
        },
        {
            id: 9, firstName: 'Alice', lastName: 'Price', address: '3354 Town', city: 'Cleveland',
            role: 'Developer',
            orders: [
                { product: 'Webcam', price: 85.99, quantity: 1, orderTotal: 85.99 },
                { product: 'HDMI Cable', price: 39.99, quantity: 2, orderTotal: 79.98 }
            ]
        },
        {
            id: 10, firstName: 'Gerard', lastName: 'Tucker', address: '6795 N. 53 W. Bills Dr.', city: 'Buffalo',
            role: 'Developer',
            orders: [
                { product: 'Fan', price: 49.99, quantity: 4, orderTotal: 199.96 },
                { product: 'Remote Control', price: 109.99, quantity: 1, orderTotal: 109.99 }
            ]
        },
        {
            id: 11, firstName: 'Shanika', lastName: 'Passmore', address: '459 S. International Dr.', city: 'Orlando',
            role: 'Developer'
        }
    ];
});

app.service('projectsService', function() {
   this.getProjects = function () {
       return projects;
   };
    this.getProject = function(id) {
        for (var i = 0; i < projects.length; i++) {
            if(projects[i].id === id) {
                return projects[i];
            }
        }
        return null;
    };

    var projects = [
        {
            id: 1, name: 'Carmel', description: 'Usability enhancements', managerId: 1, estEffort: 25, startDate: '4/30/2014',
            status: [
                { statusDate: '4/20/2014', status: 'Not Started', statusId: 1}
            ],
            tasks: [
                { name: 'Add MailTo feature', description: 'On the home screen add a "Contact Us" icon that does a MailTo the web admin', assignedDev: 4, estEffort: 2, startDate: '4/30/2014', status: 'Not Started', statusId: 1, compDate: ''},
                { name: 'Add Search feature', description: 'On the home screen add a "Search" icon that searches the web site', assignedDev: 10, estEffort: 5, startDate: '5/1/2014', status: 'Not Started', statusId: 1, compDate: ''},
                { name: 'Add Share feature', description: 'On the home screen add a "Like" icon that adds a Facebook like', assignedDev: 11, estEffort: 10, startDate: '5/6/2014', status: 'Not Started', statusId: 1, compDate: ''},
                { name: 'Add AdServer feature', description: 'Add a master banner to the website that shows our sold ad banners', assignedDev: 8, estEffort: 6, startDate: '5/1/2014', status: 'Not Started', statusId: 1, compDate: ''}

            ]
        }


    ];
});