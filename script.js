// =======================
// RESULT MAP
// =======================
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
    options: ["นอนหงาย", "นอนตะแคง", "นอนคว่ำ", "เปลี่ยนท่าบ่อย"]
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
// RENDER QUESTION
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

  html += `<div class="info-box">ข้อมูลนี้ใช้เพื่อแนะนำที่นอนที่เหมาะกับคุณที่สุด</div>`;
  questionBox.innerHTML = html;

  backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
}

// =======================
// BUTTONS
// =======================
nextBtn.onclick = () => {
  const selected = document.querySelectorAll(`input[name="q${currentQuestion}"]:checked`);
  if (!selected.length) {
    alert("กรุณาเลือกคำตอบก่อน");
    return;
  }

  answers[currentQuestion] = [...selected].map(i => i.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
};

backBtn.onclick = () => {
  currentQuestion--;
  renderQuestion();
};

// =======================
// ANALYZE
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

  if (noSpring) return score >= 3 ? "ที่นอน OPPA Premium" : "ที่นอน OPPA";
  if (firm && back) return cool ? "ที่นอนรุ่น Aida Pocket Spring" : "ที่นอนรุ่น Findi";
  if (soft && cool && back) return "ที่นอนรุ่น Aida Bonnel";
  if (soft && cool) return "ที่นอนรุ่น GO Premium";
  return "ที่นอนรุ่น GO";
}

// =======================
// SHOW RESULT
// =======================
function showResult() {
  const key = analyzeResult();
  const data = RESULT_MAP[key];

  questionBox.innerHTML = `
    <h2 class="question-title">${data.title}</h2>
    <p style="text-align:center;color:#ff9800;font-weight:600">${data.highlight}</p>
    <ul>${data.features.map(f => `<li>✔ ${f}</li>`).join("")}</ul>
    <div class="info-box">💬 ${data.belief}</div>
  `;

  nextBtn.style.display = "none";
  backBtn.style.display = "none";
}

// INIT
renderQuestion();
