
# Project Title

MedX is an E-commerce Platform that provides a way of connecting patients with doctors of a hospital.

MedX is a user-friendly and efficient online appointment booking system designed for hospitals, enabling patients to easily schedule appointments with their preferred doctors. Utilizing a given UI template, HealthConnect streamlines the appointment booking process, providing convenience and accessibility to patients seeking medical care.

## Pages

- Landing Page


<img width="1440" alt="Screenshot 2023-06-24 at 15 23 16" src="https://github.com/Abhishree-codes/short-attraction-8970/assets/123931117/cdf6c51b-87a7-4dc3-b23b-50718169607b">

- Services Page
  
<img width="1440" alt="Screenshot 2023-06-24 at 15 23 58" src="https://github.com/Abhishree-codes/short-attraction-8970/assets/123931117/9fdb504b-62eb-4329-8e87-3f85f6a9fc07">

<img width="1440" alt="Screenshot 2023-06-24 at 15 24 41" src="https://github.com/Abhishree-codes/short-attraction-8970/assets/123931117/80544bf3-db24-4984-8cf2-9cd3ae3f19e4">


<img width="1440" alt="Screenshot 2023-06-24 at 15 24 27" src="https://github.com/Abhishree-codes/short-attraction-8970/assets/123931117/3adbe1a9-0f74-4985-844f-ca00a5e3cefb">



## Features
- Doctor Directory: HealthConnect features a comprehensive directory of doctors associated with the hospital, along with their specialties, qualifications, and availability. Patients can browse through the directory to find the doctor that best suits their needs.

- Appointment Scheduling: The platform allows patients to book appointments with their chosen doctors conveniently. Patients can view the doctors' available time slots and select a suitable date and time for their appointment. The system ensures that appointments are scheduled without conflicts or overlapping.

- Patient Registration and Profiles: HealthConnect provides a patient registration system where new users can create their accounts. Patients can then create and manage their appointments.

- Real-time Availability Updates: The system dynamically updates the availability of doctors' time slots, ensuring that patients have access to accurate and up-to-date information. This feature minimizes the risk of scheduling conflicts and saves patients' time by providing real-time availability updates.

## Deployment

This Website is live and deployed on netflify:

Netlify Link: https://medx10980.netlify.app

By visiting the provided Netlify link, users can directly access and explore the HealthConnect website, experiencing its intuitive interface and seamless appointment booking functionality.

## API Reference

#### Get all items

```http
  GET All doctors https://bookish-spoon-json-server.bhishree18.repl.co/services
```

#### Get a single doctor

```http
  GET doctors from a category https://bookish-spoon-json-server.bhishree18.repl.co/services/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of category to fetch |




## Appendix


Although the following features were not implemented in the current version, they could have further enhanced the functionality of MedX:

Infinite Scroll: Infinite scroll allows for a seamless browsing experience by loading and displaying additional content as users scroll down the page. In MedX, implementing infinite scroll would have enabled patients to smoothly navigate through the doctor directory, effortlessly exploring the available options without the need for manual pagination.

JSON Web Tokens: JSON Web Tokens (JWT) provide a secure method for authentication and authorization in web applications. By implementing JWT in HealthConnect, the system could have enhanced user authentication, ensuring secure access to patient profiles and preventing unauthorized access to sensitive information.

Passport: By integrating Passport into MedX, the system could have provided simple and unobtrusive authentication for both patients and doctors, allowing for a seamless login and registration process.

Charts for Statistics: Incorporating charts and data visualization tools into MedX would have enabled the generation of insightful statistics and visual representations of appointment trends, patient demographics, and other relevant data. This kind of functionality could have provided the option to have facilitated data-driven decision-making and improved resource allocation within the hospital.

Appointment Reminders: Seinding automated appointment reminders to patients via email or SMS to reduce the likelihood of missed appointments. 

Multilingual Support: support of multiple languages to cater to a diverse patient population. Patients can choose their preferred language during the registration and appointment booking process, enhancing accessibility and user experience.

Feedback and Ratings: Patients should have the option to provide feedback and ratings for the doctor and the overall experience. 

User profile functionalities: Users can create and manage their profiles, including personal information, medical history, and insurance details, making subsequent appointments more streamlined.

I hope to incoroporate these features in future.
