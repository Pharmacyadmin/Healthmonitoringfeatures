# HealthTrack | AI/ML-Powered Health & Medication Monitoring Dashboard

A comprehensive, production-grade health informatics and pharmacovigilance web application designed to bridge clinical pharmacy practice, patient telemetry, and real-time regulatory safety surveillance.

The original UI/UX prototype and design system were created in Figma: [Health Monitoring Features Design](https://www.figma.com/design/htBotCiPnCv5059Ht8R5cG/Health-Monitoring-Features).

---

## Key Features

* **Real-Time Health Telemetry:** Tracks vital signs (Heart Rate, Blood Pressure, SpO2, and temperature trends) alongside daily patient activity and caloric expenditure metrics.
* **Interactive Lab Result Analytics:** Features historical trend charts for multi-panel laboratory results, including lipid profiles and glucose/HbA1c tracking over time.
* **Bi-Data & Sync Engine:** Aggregates and synchronizes health records, lab telemetry, and prescriptions across multiple devices, cloud storage providers, and external health networks.
* **Automated Medication Profiling & Management:** Parses synced prescriptions to instantly supply extensive clinical reference data—including adverse side effects, safety warnings, strict administration guidelines, exact dosing schedules, active prescription tracking, and adherence rate metrics.
* **Pharmacovigilance & FDA Surveillance:** Ingests live FDA drug warnings and safety alerts, performs automated portfolio-wide recall checks against active medication lists, and executes direct-to-agency reporting for adverse side effects.
* **Proactive Clinical Workflows:** Features automated prescription refill requests linked to expiration dates and secure messaging modules for provider follow-ups based on vital sign anomalies or lab trend thresholds.
* **Telehealth Service Integration:** Enables users to connect with virtual care providers, review condition-specific treatment plans, and manage remote prescription consultations directly within the platform.

---

## Tech Stack & Architecture

* **Frontend:** React, TypeScript, Tailwind CSS / Modern CSS, responsive UI/UX optimized for clinical compliance and data visualization.
* **Backend / Engine:** Bi-directional sync coordination, automated parsing modules, and safety surveillance logic.
* **Design System:** Built from custom Figma wireframes and design architectures.

---

## Getting Started

To run this project locally for development and testing:

### Prerequisites
* Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Pharmacyadmin/Healthmonitoringfeatures.git](https://github.com/Pharmacyadmin/Healthmonitoringfeatures.git)
2. Navigate to project directory:
   ```bash
      cd Healthmonitoringfeatures
3. Install dependencies:
   ```bash
      npm install

### Running the Development Server
  Start the local dev Env:
  ```bash
     npm run dev
### Open your browser and navigate to the local server URL provided in your terminal (typically http://localhost:5173).

## Author
* Omid Yazdanpanah
