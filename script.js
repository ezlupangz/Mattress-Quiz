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
    question: "อาการที่พบ (เลือกได้มากกว่า 1 ข้อ)",
    type: "multi",
    options: [
      "ปวดหลัง / ปวดเอว",
      "ปวดคอ / ไหล่",
      "นอนร้อน เหงื่อออกง่าย",
      "แพ้ง่าย / ไรฝุ่น"
    ]
  },
  {
    question: "ท่านอนที่ใช้บ่อย",
    type: "single",
    options: ["นอนหงาย", "นอนตะแคง", "นอนคว่ำ"]
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
  const selected = document.querySelectorAll(
    `input[name="q${currentQuestion}"]:checked`
  );

  if (selected.length === 0) {
    alert("กรุณาเลือกคำตอบก่อน");
    return;
  }

  answers[currentQuestion] = [...selected].map(i => i.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    const result = analyzeResult();
    questionBox.innerHTML = `
      <h2 class="question-title">ผลลัพธ์ของคุณ</h2>
      <p style="text-align:center;font-size:20px;font-weight:600">${result}</p>
      <div class="info-box">
        ทีมผู้เชี่ยวชาญจะติดต่อกลับเพื่อแนะนำที่นอนที่เหมาะสมที่สุด
      </div>
    `;
    nextBtn.style.display = "none";
    backBtn.style.display = "none";

    sendToGoogleSheet(result);
  }
};

backBtn.onclick = () => {
  currentQuestion--;
  renderQuestion();
};

// =======================
// ANALYSIS (ตามที่คุณกำหนด)
// =======================
function analyzeResult() {
  const needs = answers[4] || [];

  const noSpring = needs.includes("ต้องการที่นอนที่ไม่มีสปริง");
  const light = needs.includes("น้ำหนักไม่มากเพื่อทำความสะอาดได้สะดวก");
  const back = needs.includes("ลดอาการปวดหลัง/ปวดเมื่อยตามตัว");
  const firm = needs.includes("ความแน่นหนาของที่นอนสูง ไม่ยุบตัวง่าย");
  const cool = needs.includes("ไม่ร้อน ระบายอากาศได้ดี");
  const soft = needs.includes("สัมผัสนุ่ม นอนสบาย");

  if (noSpring) {
    let score = [light, back, firm, cool, soft].filter(Boolean).length;
    return score >= 3 ? "ที่นอนยางพารา Premium" : "ที่นอนยางพารา";
  }

  if (firm && back) {
    return cool
      ? "ที่นอน Pocket Spring ตัว Upgrade"
      : "ที่นอน Pocket Spring ธรรมดา";
  }

  if (soft && cool && back) return "ที่นอนสปริงมาตรฐาน";
  if (soft && cool) return "ที่นอนมาตรฐานพิเศษ";
  if (soft && light) return "ที่นอนมาตรฐาน";

  return "ต้องการข้อมูลเพิ่มเติม";
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


