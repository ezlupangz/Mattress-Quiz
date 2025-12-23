const RESULT_MAP = {
  "ที่นอนรุ่น GO": {
    title: "ที่นอนรุ่น GO",
    highlight: "รุ่นมาตรฐานขายดีที่สุด",
    features: [
      "เป็นที่นอนมาตรฐานของเรา",
      "น้ำหนักเบา เคลื่อนย้ายง่าย",
      "สัมผัสนุ่ม นอนสบาย",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "เหมาะกับบ้านที่ต้องการความเรียบง่าย อยู่แล้วสบาย ไม่จุกจิก"
  },

  "ที่นอนรุ่น GO Premium": {
    title: "ที่นอนรุ่น GO Premium",
    highlight: "รุ่นอัปเกรดสำหรับคนต้องการความสบายมากขึ้น",
    features: [
      "หนาและแน่นมาก",
      "มีระบบระบายความร้อน",
      "สัมผัสนุ่ม",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "คนไทยเชื่อว่าที่นอนหนา แน่น คือความมั่นคง หลับแล้วไม่ฝันร้าย"
  },

  "ที่นอนรุ่น Aida Bonnel": {
    title: "ที่นอนรุ่น Aida Bonnel",
    highlight: "ที่นอนสปริงมาตรฐานที่บาลานซ์ที่สุด",
    features: [
      "สัมผัสนุ่ม",
      "มีระบบระบายความร้อน",
      "เสริมยางพาราอัด ลดอาการปวดหลัง",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "เหมาะกับบ้านที่มีหลายวัย ใช้ร่วมกันได้ยาว ๆ"
  },

  "ที่นอนรุ่น Findi": {
    title: "ที่นอนรุ่น Findi",
    highlight: "Pocket Spring ที่รองรับสรีระดีที่สุด",
    features: [
      "สัมผัสนุ่มและแน่น",
      "รองรับสรีระได้ดี",
      "กระจายแรงทั้งตัว",
      "ลดอาการปวดเมื่อยได้เป็นอย่างดี",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "คนทำงานหนักควรมีที่นอนที่ช่วยฟื้นฟูร่างกายตอนกลางคืน"
  },

  "ที่นอนรุ่น Aida Pocket Spring": {
    title: "ที่นอนรุ่น Aida Pocket Spring",
    highlight: "Pocket Spring ตัวท็อป",
    features: [
      "สัมผัสนุ่ม",
      "มีระบบระบายความร้อน",
      "รองรับสรีระ",
      "กระจายแรงได้ดี",
      "เสริมยางพาราอัด ลดปวดหลัง",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "เหมาะกับคนที่เชื่อว่าการนอนดี = พลังชีวิตดี"
  },

  "ที่นอน OPPA": {
    title: "ที่นอน OPPA",
    highlight: "ยางพาราแท้ ไม่มีสปริง",
    features: [
      "ไม่มีสปริงเลยทั้งลูก",
      "อัดด้วยยางพาราแท้",
      "น้ำหนักไม่หนักมาก ขนย้ายสะดวก",
      "ช่วยบรรเทาอาการปวดหลัง",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "คนไทยจำนวนมากเชื่อว่าของธรรมชาติ อยู่แล้วสบายใจ"
  },

  "ที่นอน OPPA Premium": {
    title: "ที่นอน OPPA Premium",
    highlight: "ยางพาราระดับพรีเมียม",
    features: [
      "ไม่มีสปริงเลยทั้งลูก",
      "ยางพาราแท้อัดแน่น",
      "เสริมฟองน้ำเกรด A เพิ่มความยืดหยุ่น",
      "บรรเทาอาการปวดหลัง",
      "สัมผัสนุ่ม นอนสบายด้วยผ้าขนมิงค์",
      "มีประกันจากทางโรงงาน"
    ],
    belief: "ถือเป็นการดูแลตัวเองและคนในบ้านแบบให้เกียรติชีวิต"
  }
};

// =======================
// QUESTIONS
// =======================
const questions = [
  {
    question: "อายุของคุณ",
    type: "single",
    options: ["ต่ำกว่า 25 ปี", "25–40 ปี", "มากกว่า 40 ปี"]
  },
  {
    question: "น้ำหนักตัว",
    type: "single",
    options: ["ต่ำกว่า 60 kg", "60–80 kg", "มากกว่า 80 kg"]
  },
  {
    question: "อาการป่วยที่พบ (เลือกได้มากกว่า 1 ข้อ)",
    type: "multi",
    options: [
      "ปวดหลัง / ปวดเอว",
      "ปวดคอ / ไหล่",
      "นอนร้อน เหงื่อออกง่าย",
      "แพ้ง่าย / ไรฝุ่น",
      "ไม่อาการเลย"
    ]
  },
  {
    question: "ท่านอนที่ใช้บ่อย",
    type: "single",
    options: ["นอนหงาย", "นอนตะแคง", "นอนคว่ำ","เปลี่ยนท่าบ่อย"]
  },
  {
    question: "สิ่งที่ท่านต้องการสำหรับที่นอนลูกใหม่ (เลือกได้หลายคำตอบ)",
    type: "multi",
    options: [
      "สัมผัสนุ่ม นอนสบาย",
      "ไม่ร้อน ระบายอากาศได้ดี",
      "น้ำหนักไม่มากเพื่อทำความสะอาดได้สะดวก",
      "ต้องการที่นอนที่ไม่มีสปริง",
      "ลดอาการปวดหลัง/ปวดเมื่อยตามตัว",
      "ความแน่นหนาของที่นอนสูง ไม่ยุบตัวง่าย"
    ]
  }
];

let currentQuestion = 0;
let answers = [];

const questionBox = document.getElementById("question-box");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

// =======================
// RENDER
// =======================
function renderQuestion() {
  const q = questions[currentQuestion];

  let html = `
    <h2 class="question-title">${q.question}</h2>
    <div class="question-hint">กรุณาเลือกคำตอบที่ตรงกับคุณ</div>
  `;

  q.options.forEach(option => {
    const checked = answers[currentQuestion]?.includes(option);

    html += `
      <label class="option ${checked ? "selected" : ""}">
        <input
          type="${q.type === "multi" ? "checkbox" : "radio"}"
          name="q${currentQuestion}"
          value="${option}"
          ${checked ? "checked" : ""}
        >
        ${option}
      </label>
    `;
  });

  html += `
    <div class="info-box">
      ข้อมูลของท่านจะถูกนำไปวิเคราะห์โดยผู้เขี่ยวชาญด้านที่นอนที่มีประสบการณ์กว่า 30 ปี
    </div>
  `;

  questionBox.innerHTML = html;

  backBtn.style.display = currentQuestion === 0 ? "none" : "block";

  document.querySelectorAll(`input[name="q${currentQuestion}"]`)
    .forEach(input => {
      input.addEventListener("change", () => {
        const label = input.closest(".option");

        if (q.type === "single") {
          document.querySelectorAll(".option")
            .forEach(o => o.classList.remove("selected"));
          label.classList.add("selected");
        } else {
          label.classList.toggle("selected", input.checked);
        }
      });
    });
}

// =======================
// BUTTONS
// =======================
nextBtn.onclick = () => {
  const resultKey = analyzeResult();
const data = RESULT_MAP[resultKey];

questionBox.innerHTML = `
  <h2 class="question-title">${data.title}</h2>
  <p style="text-align:center;font-size:18px;font-weight:600;color:#ff9800">
    ${data.highlight}
  </p>

  <ul style="max-width:500px;margin:20px auto;font-size:16px;line-height:1.6">
    ${data.features.map(f => `<li>✔ ${f}</li>`).join("")}
  </ul>

  <div class="info-box" style="font-size:14px">
    💬 ${data.belief}
  </div>

  <div style="text-align:center;margin-top:24px">
    <button class="cta-btn">สอบถามรายละเอียดเพิ่มเติม</button>
  </div>
`;



backBtn.onclick = () => {
  currentQuestion--;
  renderQuestion();
};

// =======================
// ANALYSIS (ตามที่คุณกำหนด)
// =======================
function analyzeResult() {
  const ageGroup = answers[0]?.[0] || "";
  const needs = answers[4] || [];

  const noSpring = needs.includes("ต้องการที่นอนที่ไม่มีสปริง");
  const light = needs.includes("น้ำหนักไม่มากเพื่อทำความสะอาดได้สะดวก");
  const back = needs.includes("ลดอาการปวดหลัง/ปวดเมื่อยตามตัว");
  const firm = needs.includes("ความแน่นหนาของที่นอนสูง ไม่ยุบตัวง่าย");
  const cool = needs.includes("ไม่ร้อน ระบายอากาศได้ดี");
  const soft = needs.includes("สัมผัสนุ่ม นอนสบาย");

  const score = [light, back, firm, cool, soft].filter(Boolean).length;

  // ======================
  // 1️⃣ กลุ่มยางพารา (ไม่มีสปริง)
  // ======================
  if (noSpring) {
    return score >= 3
      ? "ที่นอน OPPA Premium"
      : "ที่นอนOPPA";
  }

  // ======================
  // 2️⃣ Pocket Spring
  // ======================
  if (firm && back) {
    return cool
      ? "ที่นอนรุ่น Aida Pocket Spring"
      : "ที่นอนรุ่น Findi";
  }

  // ======================
  // 3️⃣ ที่นอนสปริง (อายุไม่เกิน 50)
  // ======================
  const ageOk =
    ageGroup === "ต่ำกว่า 25 ปี" ||
    ageGroup === "25–40 ปี" ||
    ageGroup === "มากกว่า 40 ปี";

  if (ageOk) {
    if (soft && cool && back) return "ที่นอนรุ่น Aida Bonnel";
    if (soft && cool) return "ที่นอนรุ่น GO Premium";
    if (soft || light) return "ที่นอนรุ่น GO";
  }

  // ======================
  // 4️⃣ Fallback (ไม่มีวันหลุด)
  // ======================
  if (cool || soft) return "ที่นอนรุ่น GO Premium";

  return "ที่นอนรุ่น GO";
}

// =======================
// GOOGLE SHEET
// =======================
function sendToGoogleSheet(resultText) {
  const params = new URLSearchParams();

  params.append("age", answers[0]?.join(", ") || "");
  params.append("weight", answers[1]?.join(", ") || "");
  params.append("symptoms", answers[2]?.join(", ") || "");
  params.append("sleep", answers[3]?.join(", ") || "");
  params.append("needs", answers[4]?.join(", ") || "");
  params.append("result", resultText || "");

  fetch("https://script.google.com/macros/s/AKfycbyyxZWewDQjfJM0TA0poTr1h-FZBz2A7n-VN7YKVywbKCbm2d6tzWWqf2ZoxrCTCaTGaw/exec", {
    method: "POST",
    body: params
  });
}
// INIT
renderQuestion();
