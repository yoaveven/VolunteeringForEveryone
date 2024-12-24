function toggleNav(){
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}

const jsonData = {
    "volunteeringActivities": [
        {
            "TypeName": "התנדבות עם ילדים",
            "relevantImage": "kids.jpg",
            "shortDescription": "מתן תמיכה, ליווי ועזרה לילדים, כולל שיעורי עזר, חוגים, פעילויות חברתיות והעצמה אישית.",
            "targetAudience": "אנשים שאוהבים לעבוד עם ילדים, בעלי גישה סבלנית, רגישות ויכולת להוות דמות חינוכית ותומכת."
        },
        {
            "TypeName": "התנדבות עם קשישים",
            "relevantImage": "kshishim.jpg",
            "shortDescription": "סיוע לקשישים בבידוד חברתי, ליווי אישי, פעילויות חברתיות או עזרה בביצוע סידורים יומיומיים.",
            "targetAudience": "אנשים בעלי סבלנות ורגישות בין-אישית, שמחפשים לתרום לקהילה באמצעות קשר בין-דורי משמעותי."
        },
        {
            "TypeName": "התנדבות בחינוך",
            "relevantImage": "edu.jpg",
            "shortDescription": "סיוע במוסדות חינוך, העברת שיעורים, חונכות אישית ועידוד מצוינות בקרב תלמידים.",
            "targetAudience": "מי שרואה ערך בקידום ההשכלה, עם יכולות הוראה, מנהיגות וסבלנות לעבודה עם ילדים ונוער."
        },
        {
            "TypeName": "סיוע לחולים ולמשפחותיהם",
            "relevantImage": "holim.jpg",
            "shortDescription": "ליווי חולים ומשפחותיהם, כולל הסעות לבתי חולים, הפגת בדידות או עזרה אדמיניסטרטיבית.",
            "targetAudience": "אנשים שמחפשים תרומה משמעותית במצבי קושי, עם גישה תומכת, אמפתיה ויכולת הכלה."
        },
        {
            "TypeName": "התנדבות עם בעלי חיים",
            "relevantImage": "pets.jpg",
            "shortDescription": "סיוע בבתי מחסה לבעלי חיים, מציאת בתים מאמצים, או פעילויות חינוך להעלאת מודעות.",
            "targetAudience": "חובבי בעלי חיים שמחפשים לשלב אהבתם עם תרומה לקהילה, ואינם חוששים מעבודה פיזית או התמודדות רגשית."
        },
        {
            "TypeName": "הסברה ציבורית",
            "relevantImage": "hasbara.jpg",
            "shortDescription": "ארגון פעילויות למען העלאת מודעות בנושאים חברתיים, כגון בריאות, חינוך, או מניעת אלימות.",
            "targetAudience": "אנשים בעלי כישורי תקשורת חזקה ואמונה בעשייה חברתית, שמוכנים ליזום ולפעול למען מטרות גדולות."
        },
        {
            "TypeName": "איכות הסביבה",
            "relevantImage": "recicling.jpg",
            "shortDescription": "ניקיון פארקים, חופים, נטיעת עצים, וקידום מודעות לשמירה על הטבע.",
            "targetAudience": "אוהבי טבע וסביבה שמחפשים לתרום באמצעות עבודה פיזית וחיבור לטבע."
        },
        {
            "TypeName": "חירום והצלה",
            "relevantImage": "hazala.jpg",
            "shortDescription": "התנדבות בארגונים המספקים סיוע חירום, כמו מגן דוד אדום, יחידות חילוץ או צוותי כיבוי אש.",
            "targetAudience": "אנשים שמחפשים תרומה משמעותית ומיידית, בעלי קור רוח ויכולת תפקוד במצבי לחץ."
        },
        {
            "TypeName": "תרבות ואמנות",
            "relevantImage": "tarbut.png",
            "shortDescription": "קידום אירועי תרבות, הפקת מופעים, עזרה במוזיאונים או סיוע לאמנים צעירים.",
            "targetAudience": "חובבי אמנות ותרבות עם יכולת ארגון, יצירתיות ורצון לקדם יוזמות קהילתיות."
        },
        {
            "TypeName": "תמיכה קהילתית",
            "relevantImage": "temiha.jpg",
            "shortDescription": "עזרה למשפחות במצוקה, חלוקת מזון, הפעלת מרכזים קהילתיים ותמיכה רגשית.",
            "targetAudience": "אנשים שמרגישים שליחות חברתית ורוצים לספק עזרה מיידית לקהילות נזקקות."
        }
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    const itemsContainer = document.getElementById("itemsContainer");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const showAllButton = document.getElementById("showAllButton");

    document.getElementById("questionsBTN").addEventListener("click", function () {
        window.location.href = "https://www.yadlachimusa.org.il/questions-to-ask-yourself-before-volunteering/#content"; 
    });

    function renderActivities(activities) {
        itemsContainer.innerHTML = "";
        itemsContainer.setAttribute("class", "row g-4");
        activities.forEach((v) => {
            const myCard = document.createElement("div");
            myCard.setAttribute("class", "col-12 col-md-6 col-lg-4");

            myCard.innerHTML = `
            <div class="card shadow-sm h-100">
                <img src="images/${v.relevantImage}" class="card-img-top" alt="${v.TypeName}">
                <div class="card-body text-center">
                    <h5 class="card-title">${v.TypeName}</h5>
                    <button id="moredetailsButton" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#volunteeringModal" data-activity='${JSON.stringify(v)}'>
                        פרטים נוספים
                    </button>
                </div>
            </div>
        `;
            itemsContainer.appendChild(myCard);
        });
    }

    renderActivities(jsonData.volunteeringActivities);

    const modal = document.getElementById('volunteeringModal');
    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const activity = JSON.parse(button.getAttribute('data-activity'));

        const modalBody = modal.querySelector('.modal-body');
        modalBody.innerHTML = `
            <h5>${activity.TypeName}</h5>
            <img src="images/${activity.relevantImage}" class="img-fluid mb-3" alt="${activity.TypeName}">
            <p><strong>תיאור:</strong> ${activity.shortDescription}</p>
            <p><strong>מתאים ל:</strong> ${activity.targetAudience}</p>
            <button id="detailsButton" class="btn btn-info">להשארת פרטים</button>
        `;

        const detailsButton = modalBody.querySelector("#detailsButton");
        detailsButton.addEventListener("click", function () {
            const detailsModal = new bootstrap.Modal(document.getElementById('detailsModal'));
            detailsModal.show();
        });
    });

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredActivities = jsonData.volunteeringActivities.filter((v) =>
            v.TypeName.toLowerCase().includes(searchTerm)
        );
        renderActivities(filteredActivities);
    });

    showAllButton.addEventListener("click", () => {
        renderActivities(jsonData.volunteeringActivities);
        searchInput.value = "";
    });
});
