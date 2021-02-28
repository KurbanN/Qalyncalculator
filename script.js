function setSkillPrice() {
    const skills = [
        {
            value: document.getElementById("skill1").value,
            checked: document.getElementById("skill1").checked
        },
        {
            value: document.getElementById("skill2").value,
            checked: document.getElementById("skill2").checked
        },
        {
            value: document.getElementById("skill3").value,
            checked: document.getElementById("skill3").checked
        },
        {
            value: document.getElementById("skill4").value,
            checked: document.getElementById("skill4").checked
        }
    ]

    const skillsValues = Object.values(skills).map(item => {
        if (item.checked) {
            return item.value
        } else {
            return 0
        }
    })

    return sum = skillsValues.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
}

function setAgePrice() {
    const ages = [
        {
            value: document.getElementById("age1").value,
            checked: document.getElementById("age1").checked
        },
        {
            value: document.getElementById("age2").value,
            checked: document.getElementById("age2").checked
        },
        {
            value: document.getElementById("age3").value,
            checked: document.getElementById("age3").checked
        }
    ]

    for (let i = 0; i < ages.length; i++) {
        if (ages[i].checked) {
            return ages[i].value
        }
    }
}

function setReputation() {
    const reputations = [
        {
            title: "Gossips about his parent's attitude",
            value: document.getElementById("reputation1").value,
            checked: document.getElementById("reputation1").checked
        },
        {
            title: "Gossips about his character",
            value: document.getElementById("reputation2").value,
            checked: document.getElementById("reputation2").checked
        },
        {
            title: "General gossips around his person",
            value: document.getElementById("reputation3").value,
            checked: document.getElementById("reputation3").checked
        }
    ]

    const selectReputation = reputations.reduce((cur, obj) => {
        cur[obj.title] = {
            checked: obj.checked,
            value: obj.value
        }
        return cur
    }, {})

    const values = Object.values(selectReputation).map(item => {
        if (item.checked) {
            return item.value
        } else {
            return 0
        }
    })

    return sum = values.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue))
}

function myFunction() {
    let education = Number(document.getElementById("education").value)
    let networth = (Number(document.getElementById("networth").value))
    const skill = setSkillPrice()
    const age = setAgePrice()
    const reputation = setReputation()
    const isAge = age ? Number(age) : 0
    
    let total = (education + networth + isAge) * (reputation + skill)
    document.getElementById("test").innerHTML = total
}