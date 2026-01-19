document.addEventListener("DOMContentLoaded", () => {

  // =======================
  // RESULT MAP
  // =======================
  const RESULT_MAP = {
    "ที่นอนรุ่น GO": {
      title: "ที่นอนรุ่น GO",
      image: "images/go.jpg",
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
      image: "images/go-premium.jpg",
      highlight: "รุ่นอัปเกรดสำหรับคนต้องการความสบายมากขึ้น",
      features: [
        "หนาและแน่นมาก",
        "มีระบบระบายความร้อน",
        "สัมผัสนุ่ม",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "คนไทยเชื่อว่าที่นอนหนา แน่น คือความมั่นคง"
    },

    "ที่นอนรุ่น aida-bonnel": {
      title: "ที่นอนรุ่น Aida Two Euro Top",
      image: "images/aida-bonnel.jpg",
      highlight: "ที่นอนสปริงมาตรฐานที่บาลานซ์ที่สุด",
      features: [
        "สัมผัสนุ่ม",
        "มีระบบระบายความร้อน",
        "เสริมยางพาราอัด ลดอาการปวดหลัง",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "เหมาะกับบ้านที่มีหลายวัย ใช้ร่วมกันได้"
    },

    "ที่นอนรุ่น Findi": {
      title: "ที่นอนรุ่น Findi",
      image: "images/findi.jpg",
      highlight: "Pocket Spring รองรับสรีระดีเยี่ยม",
      features: [
        "สัมผัสนุ่มและแน่น",
        "รองรับสรีระ",
        "กระจายแรงทั้งตัว",
        "ลดอาการปวดเมื่อย",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "เหมาะกับคนทำงานหนัก"
    },

    "ที่นอนรุ่น aida-pocket": {
      title: "ที่นอนรุ่น Aida One Pocket Spring",
      image: "images/aida-pocket.jpg",
      highlight: "Pocket Spring ระดับพรีเมียม",
      features: [
        "สัมผัสนุ่ม",
        "มีระบบระบายความร้อน",
        "รองรับสรีระ",
        "เสริมยางพาราอัด",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "การนอนดี = พลังชีวิตดี"
    },

    "ที่นอน OPPA": {
      title: "ที่นอน OPPA",
      image: "images/oppa.jpg",
      highlight: "ยางพาราแท้ ไม่มีสปริง",
      features: [
        "ไม่มีสปริง",
        "ยางพาราแท้อัดแน่น",
        "น้ำหนักไม่หนัก",
        "ช่วยลดปวดหลัง",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "ของธรรมชาติ อยู่แล้วสบายใจ"
    },

    "ที่นอน OPPA Premium": {
      title: "ที่นอน OPPA Premium",
      image: "images/oppa-premium.jpg",
      highlight: "ยางพาราระดับพรีเมียม",
      features: [
        "ไม่มีสปริง",
        "ยางพาราแท้",
        "ฟองน้ำเกรด A",
        "ผ้าขนมิงค์นุ่ม",
        "มีประกันจากทางโรงงาน"
      ],
      belief: "ดูแลตัวเองและคนในบ้าน"
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
      question: "อาการที่พบ (เลือกได้มากกว่า 1 ข้อ)",
      type: "multi",
      options: [
        "ปวดหลัง / ปวดเอว",
        "ปวดคอ / ไหล่",
        "นอนร้อน เหงื่อออกง่าย",
        "แพ้ง่าย / ไรฝุ่น",
        "ไม่มีอาการ"
      ]
    },
    {
      question: "ท่านอนที่ใช้บ่อย",
      type: "single",
      options: ["นอนหงาย", "นอนตะแคง", "นอนคว่ำ", "เปลี่ยนท่าบ่อย"]
    },
    {
      question: "สิ่งที่ต้องการสำหรับที่นอนใหม่ (เลือกได้หลายข้อ)",
      type: "multi",
      options: [
        "สัมผัสนุ่ม นอนสบาย",
        "ไม่ร้อน ระบายอากาศได้ดี",
        "น้ำหนักไม่มากเพื่อทำความสะอาดได้สะดวก",
        "ต้องการที่นอนที่ไม่มีสปริง",
        "ลดอาการปวดหลัง/ปวดเมื่อย",
        "ความแน่นหนา ไม่ยุบตัวง่าย"
      ]
    }
  ];

  let currentQuestion = 0;
  let answers = [];

  const questionBox = document.getElementById("question-box");
  const nextBtn = document.getElementById("nextBtn");
  const backBtn = document.getElementById("backBtn");

  function renderQuestion() {
    const q = questions[currentQuestion];

    questionBox.innerHTML = `
      <h2 class="question-title">${q.question}</h2>
      <div class="question-hint">กรุณาเลือกคำตอบ</div>
      ${q.options.map(opt => `
        <label class="option">
          <input type="${q.type === "multi" ? "checkbox" : "radio"}"
                 name="q${currentQuestion}" value="${opt}">
          ${opt}
        </label>
      `).join("")}
      <div class="info-box">ข้อมูลใช้เพื่อแนะนำที่นอนที่เหมาะกับคุณ</div>
    `;

    backBtn.style.display = currentQuestion === 0 ? "none" : "inline-block";
  }

  function analyzeResult() {
    const needs = answers[4] || [];
    const noSpring = needs.includes("ต้องการที่นอนที่ไม่มีสปริง");
    const firm = needs.includes("ความแน่นหนา ไม่ยุบตัวง่าย");
    const back = needs.includes("ลดอาการปวดหลัง/ปวดเมื่อย");
    const cool = needs.includes("ไม่ร้อน ระบายอากาศได้ดี");
    const soft = needs.includes("สัมผัสนุ่ม นอนสบาย");

    if (noSpring) return needs.length >= 3 ? "ที่นอน OPPA Premium" : "ที่นอน OPPA";
    if (firm && back) return cool ? "ที่นอนรุ่น Aida Pocket Spring" : "ที่นอนรุ่น Findi";
    if (soft && cool && back) return "ที่นอนรุ่น Aida Bonnel";
    if (soft && cool) return "ที่นอนรุ่น GO Premium";
    return "ที่นอนรุ่น GO";
  }

  function showResult() {
    const result = RESULT_MAP[analyzeResult()];
    questionBox.innerHTML = `
  <h2 class="question-title">${data.title}</h2>

  <img 
    src="${data.image}" 
    alt="${data.title}"
    style="
      width:100%;
      max-width:420px;
      display:block;
      margin:16px auto;
      border-radius:16px;
      box-shadow:0 6px 20px rgba(0,0,0,0.15);
    "
  />

  <p style="text-align:center;font-size:18px;font-weight:600;color:#ff9800">
    ${data.highlight}
  </p>

  <ul style="max-width:500px;margin:20px auto;font-size:16px;line-height:1.7">
    ${data.features.map(f => `<li>✔ ${f}</li>`).join("")}
  </ul>

  <div class="info-box" style="font-size:14px">
    💬 ${data.belief}
  </div>

  <div style="text-align:center;margin-top:24px">
    <button class="cta-btn">สอบถามรายละเอียดเพิ่มเติม</button>
  </div>
`;

  }

  nextBtn.onclick = () => {
    const selected = document.querySelectorAll(`input[name="q${currentQuestion}"]:checked`);
    if (!selected.length) return alert("กรุณาเลือกคำตอบ");
    answers[currentQuestion] = [...selected].map(i => i.value);
    currentQuestion++;
    currentQuestion < questions.length ? renderQuestion() : showResult();
  };

  backBtn.onclick = () => {
    currentQuestion--;
    renderQuestion();
  };

  renderQuestion();
});

