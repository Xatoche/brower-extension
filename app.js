fetch("/data.json")
    .then(res => res.json())
    .then(data => {

        console.log(data)

   
        const $extensionsContainers = document.createElement("section")
        const $componentProperties = document.createElement("main")
        const $extensionsCard = document.createElement("div")
        const $extensionIcon = document.createElement('img')
        const $extensionDetails = document.createElement('div')
        const $removeButton = document.createElement('button')

        const $extensionName = document.createTextNode("DevLens");
        const $extensionDescription = document.createTextNode(" Quickly inspect page layouts and visualize element boundaries. ")




        



    })
    .catch(err => console.log("Une erreur est survenue", err))