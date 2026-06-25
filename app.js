/* TAKELSA — Poires Williams · production app (vanilla, zéro dépendance).
   Rendu identique au v8 : FR↔AR + RTL, signature El Bir, halo AR, mobile aéré. */
(function () {
  "use strict";

  var CONTACT = {
    facebook: "https://www.facebook.com/ridha.dakhlaoui.77",
    phone1: "+21620039234", phone1_h: "(+216) 20 039 234", phone2_h: "(+216) 20 523 262",
    whatsapp: "https://wa.me/21620039234",
    maps: "https://www.google.com/maps?q=36.78711,10.67108",
    coords: "36°47′13.6″N · 10°40′15.9″E",
    oil_url: "https://bh216-tak.github.io/takelsa-premium/"
  };

  var COPY = {
    fr: {
      dir: "ltr",
      nav: ["Le domaine", "El Bir", "Le fruit", "Contact"], cta_contact: "Contacter",
      hero_eyebrow: "Été 2026 · Cap Bon", hero_title_a: "Nos poiriers", hero_title_b: "Williams", hero_title_c: "du Cap Bon.",
      hero_lede: "Vergers sains, en pleine production. Une invitation, simplement : venez les voir.",
      hero_cta1: "Parler récolte", hero_cta2: "Découvrir le domaine",
      hero_meta: [{ l: "Variété", v: "Williams" }, { l: "Terroir", v: "Cap Bon" }, { l: "Saison", v: "Été 2026" }],
      hero_place: "Bir Ezzit · Takelsa",
      sig_eyebrow: "Le cœur du domaine", sig_name: "El Bir", sig_gloss: "« le puits »",
      sig_body: "Notre plus ancien verger porte le nom d'une source. À l'ombre des cyprès, les poiriers y plongent leurs racines depuis des générations. C'est de cette eau que naît le fruit — et c'est ici qu'on vous accueille.",
      sig_vergers_label: "Cinq parcelles, cinq noms", vergers: ["El Bir", "El Maghrebi", "Mourali", "El Oued", "Kram"],
      ed_eyebrow: "Le fruit & la terre", ed_title: "La poire Williams, sur l'arbre.",
      ed_body: "Chair fine, parfum franc, peau lumineuse. Ici en pleine croissance, photographiée au verger entre les rangées de cyprès du Cap Bon — une terre franche, du soleil, de l'eau, et un savoir-faire paysan transmis.",
      ed_note: "Photo de la poire mûre à venir, à la récolte.", ed_caption: "Verger TAKELSA, Cap Bon — été 2026",
      contact_eyebrow: "Contact direct", contact_title: "Parlons récolte.",
      contact_sub: "Le plus simple : écrivez-nous sur Facebook / Messenger — c'est là qu'on répond au quotidien. Ou appelez. On vous attend au verger.",
      c_fb: "Messenger / Facebook", c_fb_sub: "Le plus rapide", c_phone: "Téléphone", c_wa: "WhatsApp", c_wa_sub: "Si vous préférez",
      map_label: "Bir Ezzit, Takelsa · Cap Bon", map_cta: "Itinéraire",
      footer_tag: "Poires Williams · Cap Bon · Tunisie",
      footer_note: "Vitrine d'invitation. Récolte été 2026. Contact direct, sans intermédiaire.",
      footer_producer_l1: "TAKELSA — Bir Ezzit, Takelsa · Cap Bon, Tunisie", footer_producer_l2: "Contact : Ridha Dakhlaoui (responsable)",
      footer_oil: "Du même domaine, à Bir Ezzit — notre huile d'olive ⵣ TAKELSA",
      hero_alt: "Poirier Williams chargé de fruits, verger TAKELSA à Bir Ezzit, Takelsa (Cap Bon)"
    },
    ar: {
      dir: "rtl",
      nav: ["الضيعة", "البير", "الثمرة", "اتصال"], cta_contact: "تواصل معنا",
      hero_eyebrow: "صيف 2026 · الوطن القبلي", hero_title_a: "أشجار إجاص", hero_title_b: "ويليامز", hero_title_c: "بالوطن القبلي.",
      hero_lede: "سوانينا في خيرها، والزيارة تشرفنا. تفضلوا بحذانا في تاكلسة، الدار داركم والغلة على عينيكم.",
      hero_cta1: "لنتحدّث عن المحصول", hero_cta2: "اكتشفوا الضيعة",
      hero_meta: [{ l: "الصنف", v: "ويليامز" }, { l: "الأرض", v: "الوطن القبلي" }, { l: "الموسم", v: "صيف 2026" }],
      hero_place: "بير الزيت · تاكلسة",
      sig_eyebrow: "قلب الضيعة", sig_name: "البير", sig_gloss: "« البئر »",
      sig_body: "أقدمُ بساتيننا يحمل اسم عين ماء. في ظلّ أشجار السرول، تغرس أشجار الإجاص جذورها منذ أجيال. من هذا الماء يولد الثمر — وهنا نستقبلكم.",
      sig_vergers_label: "خمس قطع، خمسة أسماء", vergers: ["البير", "المغربي", "المورالي", "الواد", "الكرم"],
      ed_eyebrow: "الثمرة والأرض", ed_title: "إجاص ويليامز، على الشجرة.",
      ed_body: "إجاص ويليامز: ثمرة متوازنة، مظهر ممتاز وطعم أصيل. من قلب سواني تاكلسة، حيث تلتقي الخبرة الفلاحية بجودة الأرض.",
      ed_note: "صورة الثمرة الناضجة لاحقًا، عند الجَني.", ed_caption: "بستان تاكلسة، الوطن القبلي — صيف 2026",
      contact_eyebrow: "تواصل مباشر", contact_title: "لنتحدّث عن المحصول.",
      contact_sub: "كلمونا مباشرة باش نحكيو في المحصول. موجودين على فيسبوك وماسنجر كل يوم، والا اطلبونا في التلفون. نستناو فيكم في السانية.",
      c_fb: "ماسنجر / فيسبوك", c_fb_sub: "الأسرع", c_phone: "الهاتف", c_wa: "واتساب", c_wa_sub: "إن فضّلتم",
      map_label: "بير الزيت، تاكلسة · الوطن القبلي", map_cta: "الاتجاهات",
      footer_tag: "إجاص ويليامز · الوطن القبلي · تونس",
      footer_note: "صفحة دعوة. محصول صيف 2026. تواصل مباشر دون وسيط.",
      footer_producer_l1: "تاكلسة — بير الزيت، تاكلسة · الوطن القبلي، تونس", footer_producer_l2: "جهة الاتصال: رضا الدخلاوي (المسؤول)",
      footer_oil: "من نفس الضيعة، ببير الزيت — زيت زيتوننا ⵣ تاكلسة",
      hero_alt: "أشجار إجاص ويليامز محمّلة بالثمار، بستان تاكلسة بالوطن القبلي"
    }
  };

  var ICON = {
    fb: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
    fbBig: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"/></svg>',
    phone: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    wa: '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.7-6.18A11.86 11.86 0 0 1 .16 11.9C.16 5.34 5.5.01 12.06.01a11.82 11.82 0 0 1 8.4 3.49 11.78 11.78 0 0 1 3.48 8.41c0 6.55-5.34 11.88-11.9 11.88a11.92 11.92 0 0 1-5.69-1.45L.06 24zM6.6 20.13c1.67.99 3.28 1.59 5.45 1.59 5.45 0 9.89-4.43 9.9-9.88a9.78 9.78 0 0 0-2.89-7 9.74 9.74 0 0 0-6.99-2.9c-5.46 0-9.9 4.43-9.9 9.88 0 2.28.67 3.99 1.79 5.78l-1.01 3.67 3.65-.14z"/></svg>',
    arrow: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    clock: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'
  };

  function pic(name, smW, fullW, sizes, cls, alt, imgStyle, hidden) {
    // <picture> webp + jpg fallback, srcset responsive
    return '<picture>' +
      '<source type="image/webp" srcset="./assets/photos/' + name + '-sm.webp ' + smW + 'w, ./assets/photos/' + name + '.webp ' + fullW + 'w" sizes="' + sizes + '">' +
      '<img ' + (cls ? 'class="' + cls + '" ' : '') + 'src="./assets/photos/' + name + '-sm.jpg" alt="' + (alt || '') + '"' + (hidden ? ' aria-hidden="true"' : '') + ' style="' + imgStyle + '">' +
      '</picture>';
  }

  function header(t, lang) {
    var anchors = ["#top", "#bir", "#fruit", "#contact"];
    var nav = t.nav.map(function (n, i) { return '<a href="' + anchors[i] + '" class="tks-navlink" style="text-decoration:none">' + n + '</a>'; }).join("");
    return '<header id="tks-header" style="position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding:1rem clamp(1.25rem,4vw,4rem);border-bottom:1px solid transparent;transition:all var(--dur-base) var(--ease-out)">' +
      '<a href="#top" style="display:flex;align-items:center;gap:.5rem;text-decoration:none">' +
        '<span class="tks-yaz" style="font-size:1.9rem">ⵣ</span>' +
        '<span style="font-family:var(--display-font);font-size:1.45rem;letter-spacing:' + (lang === "ar" ? "0" : ".14em") + ';color:var(--ink-900)">' + (lang === "ar" ? "تاكلسة" : "TAKELSA") + '</span>' +
      '</a>' +
      '<nav class="tks-nav" style="display:flex;gap:1.7rem">' + nav + '</nav>' +
      '<div style="display:flex;align-items:center;gap:.75rem">' +
        '<button id="tks-lang" aria-label="Langue / اللغة" class="tks-langbtn"><span style="opacity:' + (lang === "fr" ? 1 : .4) + '">FR</span><span style="color:var(--border-strong)">·</span><span style="opacity:' + (lang === "ar" ? 1 : .4) + '">ع</span></button>' +
        '<a href="#contact" class="tks-cta-prim" style="background:var(--brand);color:var(--text-on-brand);font-size:.875rem;padding:.5rem .9rem;border-radius:var(--radius-md);box-shadow:var(--shadow-brand)">' + t.cta_contact + '</a>' +
      '</div>' +
    '</header>';
  }

  function ctaFb(href, label, big) {
    return '<a href="' + href + '" target="_blank" rel="noopener" class="tks-cta-fb" style="background:#1877F2;color:#fff;font-size:' + (big ? "1.125rem" : "1rem") + ';padding:' + (big ? ".95rem 1.7rem" : ".75rem 1.3rem") + ';border-radius:var(--radius-pill);box-shadow:var(--shadow-sm)">' + ICON.fb + label + '</a>';
  }

  function hero(t, lang) {
    var ar = lang === "ar";
    // Trait rouge (swoosh) FR ET AR — parité (choix PO 2026-06-24, edit build local revertible).
    // AR : offset un peu plus bas pour passer sous les jambages arabes sans manger les lettres.
    var word = '<span style="color:var(--pear-700)">' + t.hero_title_b + '</span>' +
        '<svg viewBox="0 0 240 14" preserveAspectRatio="none" aria-hidden="true" style="position:absolute;inset-inline-start:0;bottom:' + (ar ? "-.30em" : "-.18em") + ';width:100%;height:.32em;overflow:visible"><path d="M2 9 C 60 3, 180 3, 238 8" fill="none" stroke="var(--clay-500)" stroke-width="3.5" stroke-linecap="round"/></svg>';
    var meta = t.hero_meta.map(function (m, i) {
      return '<div style="display:flex;flex-direction:column;gap:.15rem;' + (i ? "padding-inline-start:clamp(1.2rem,2.5vw,2rem);border-inline-start:1px solid var(--border-default)" : "") + '">' +
        '<dt style="font-family:var(--ui-font);font-size:.68rem;font-weight:600;letter-spacing:' + (ar ? "0" : ".12em") + ';text-transform:' + (ar ? "none" : "uppercase") + ';color:var(--text-muted)">' + m.l + '</dt>' +
        '<dd style="margin:0;font-family:var(--display-font);font-size:1.35rem;color:var(--text-primary);line-height:1.1">' + m.v + '</dd></div>';
    }).join("");
    var photo = '<div style="order:' + (ar ? 1 : 2) + ';position:relative">' +
      '<div id="tks-heroframe" style="position:relative;border-radius:var(--radius-xl);padding:clamp(10px,1.5vw,18px);background:linear-gradient(150deg,var(--pear-600),var(--pear-800));box-shadow:var(--shadow-lg)">' +
        '<div class="rv tks-hero-photo" data-rv="mask" data-delay="160" style="border-radius:var(--radius-lg);overflow:hidden;aspect-ratio:4/5;position:relative">' +
          pic("hero-tree-graded", 760, 1400, "(max-width:880px) 92vw, 44vw", "tks-kenburns", t.hero_alt, "width:100%;height:100%;object-fit:cover;object-position:center 42%;display:block") +
          '<span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 62%,rgba(28,38,22,.30))"></span>' +
        '</div>' +
      '</div>' +
      '<div class="rv" data-rv="up" data-delay="520" style="position:absolute;inset-inline-end:6%;bottom:5%;background:color-mix(in srgb,var(--cream-50) 93%,transparent);backdrop-filter:blur(6px);border-radius:var(--radius-pill);padding:.5rem .95rem;box-shadow:var(--shadow-sm);font-family:var(--ui-font);font-size:.78rem;font-weight:600;color:var(--ink-900);display:inline-flex;align-items:center;gap:.45rem"><span class="tks-yaz" style="font-size:.95rem;color:var(--accent)">ⵣ</span>' + t.hero_place + '</div>' +
    '</div>';
    var text = '<div style="order:' + (ar ? 2 : 1) + '">' +
      '<div class="rv tks-eyebrow" data-rv="up" style="display:inline-flex;align-items:center;gap:.55rem"><span style="width:26px;height:1.5px;background:var(--accent);display:inline-block"></span>' + t.hero_eyebrow + '</div>' +
      '<h1 style="margin:1.1rem 0 0;font-family:var(--display-font);font-weight:400;font-size:clamp(2.9rem,6.6vw,6rem);line-height:' + (ar ? "1.32" : ".98") + ';letter-spacing:' + (ar ? "0" : "-.015em") + ';color:var(--ink-900)">' +
        '<span class="rv" data-rv="blur" style="display:block">' + t.hero_title_a + '</span>' +
        '<span class="rv" data-rv="blur" data-delay="110" style="display:block;position:relative;width:fit-content">' + word + '</span>' +
        '<span class="rv" data-rv="blur" data-delay="210" style="display:block">' + t.hero_title_c + '</span>' +
      '</h1>' +
      '<p class="rv" data-rv="up" data-delay="300" style="margin:1.6rem 0 0;font-family:var(--font-editorial);font-size:clamp(1.15rem,1.7vw,1.45rem);line-height:1.6;color:var(--text-secondary);max-width:32ch">' + t.hero_lede + '</p>' +
      '<div class="rv tks-hero-cta" data-rv="up" data-delay="380" style="display:flex;flex-wrap:wrap;gap:.85rem;margin-top:2rem">' + ctaFb(CONTACT.facebook, t.hero_cta1, true) + '<a href="#bir" class="tks-ghost-dark">' + t.hero_cta2 + '</a></div>' +
      '<dl class="rv" data-rv="up" data-delay="460" style="display:flex;flex-wrap:wrap;gap:0 clamp(1.2rem,2.5vw,2rem);margin:2.4rem 0 0">' + meta + '</dl>' +
    '</div>';
    return '<section id="top" style="position:relative;overflow:hidden">' +
      '<span aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;background:radial-gradient(70% 60% at 50% 28%, rgba(229,165,44,.15), transparent 72%)"></span>' +
      '<div class="tks-hero-grid" style="position:relative;max-width:1320px;margin:0 auto;padding:clamp(2rem,5vw,4.5rem) clamp(1.25rem,4vw,4rem) clamp(2.5rem,5vw,4rem);display:grid;grid-template-columns:1.08fr .92fr;gap:clamp(1.5rem,4vw,3.5rem);align-items:center;min-height:min(86vh,760px)">' + text + photo + '</div>' +
      '<div aria-hidden="true" class="tks-zig-band"></div>' +
    '</section>';
  }

  function seal(t, lang) {
    var ar = lang === "ar";
    var ringSvg;
    if (ar) {
      // Arabic cursive can't shape along an SVG <textPath> (RTL-on-path bug) →
      // an Amazigh struck-seal frieze instead (ⵣ + diamonds) that rotates the same.
      var items = "";
      for (var i = 0; i < 12; i++) {
        var a = i * 30;
        if (i % 2 === 0) items += '<text x="150" y="39" text-anchor="middle" transform="rotate(' + a + ' 150 150)" style="font-family:\'Noto Sans Tifinagh\',sans-serif;font-size:17px" fill="rgba(244,205,114,.92)">ⵣ</text>';
        else items += '<rect x="146.6" y="33.4" width="6" height="6" transform="rotate(' + a + ' 150 150) rotate(45 149.6 36.4)" fill="rgba(244,205,114,.8)"/>';
      }
      ringSvg = '<svg viewBox="0 0 300 300" class="tks-seal-ring" style="position:absolute;inset:0;width:100%;height:100%">' + items + '</svg>';
    } else {
      var ring = "EL BIR · LE PUITS · CAP BON · ";
      ringSvg = '<svg viewBox="0 0 300 300" class="tks-seal-ring" style="position:absolute;inset:0;width:100%;height:100%"><defs><path id="tks-sp" d="M150,150 m-118,0 a118,118 0 1,1 236,0 a118,118 0 1,1 -236,0"></path></defs>' +
        '<text fill="rgba(244,205,114,.9)" style="font-family:var(--ui-font);font-size:15px;font-weight:600;letter-spacing:2px"><textPath href="#tks-sp" startOffset="0">' + ring + ring + '</textPath></text></svg>';
    }
    return '<div class="rv" data-rv="blur" style="display:flex;justify-content:center;order:' + (ar ? 2 : 1) + '">' +
      '<div style="position:relative;width:min(72vw,300px);aspect-ratio:1/1">' +
        ringSvg +
        '<span aria-hidden="true" style="position:absolute;inset:14%;border-radius:50%;border:1.5px solid rgba(229,165,44,.5)"></span>' +
        '<span aria-hidden="true" style="position:absolute;inset:18%;border-radius:50%;border:1px dashed rgba(229,165,44,.35)"></span>' +
        '<div style="position:absolute;inset:14%;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 8%">' +
          '<span class="tks-yaz" style="font-size:clamp(2.2rem,8vw,3.2rem);color:var(--amber-300)">ⵣ</span>' +
          '<span style="font-family:var(--display-font);font-size:clamp(1.3rem,4.4vw,1.7rem);color:var(--cream-50);margin-top:.25rem;white-space:nowrap">' + t.sig_name + '</span>' +
          '<span style="font-family:var(--font-editorial);font-style:italic;font-size:.85rem;color:var(--amber-300);white-space:nowrap">' + t.sig_gloss + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function signature(t, lang) {
    var ar = lang === "ar";
    var names = t.vergers.map(function (v, i) {
      return '<span style="font-family:var(--display-font);font-size:clamp(1.15rem,2vw,1.5rem);white-space:nowrap;color:' + (i === 0 ? "var(--amber-300)" : "rgba(247,242,232,.92)") + '">' + v + (i < t.vergers.length - 1 ? '<span style="color:rgba(229,165,44,.5);margin-inline-start:1rem">·</span>' : '') + '</span>';
    }).join("");
    var txt = '<div style="order:' + (ar ? 1 : 2) + '">' +
      '<div class="rv tks-eyebrow" data-rv="up" style="color:var(--amber-300)">' + t.sig_eyebrow + '</div>' +
      '<h2 class="rv" data-rv="up" data-delay="80" style="font-family:var(--display-font);color:var(--cream-50);font-weight:400;font-size:clamp(2.4rem,5vw,3.8rem);line-height:1.02;margin:.7rem 0 0">' + t.sig_name + ' <span style="color:var(--amber-300);font-style:italic;font-family:var(--font-editorial);font-size:.7em">' + t.sig_gloss + '</span></h2>' +
      '<p class="rv" data-rv="up" data-delay="160" style="font-family:var(--font-editorial);font-size:clamp(1.15rem,1.7vw,1.4rem);line-height:1.72;color:rgba(247,242,232,.86);margin:1.4rem 0 0;max-width:46ch">' + t.sig_body + '</p>' +
      '<div class="rv" data-rv="up" data-delay="260" style="margin-top:2.2rem;padding-top:1.5rem;border-top:1px solid rgba(229,165,44,.28)">' +
        '<div style="font-family:var(--ui-font);font-size:.72rem;font-weight:600;letter-spacing:' + (ar ? "0" : ".14em") + ';text-transform:' + (ar ? "none" : "uppercase") + ';color:var(--amber-300);margin-bottom:.9rem">' + t.sig_vergers_label + '</div>' +
        '<div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:.4rem 1rem">' + names + '</div>' +
      '</div></div>';
    return '<section id="bir" style="position:relative;overflow:hidden;color:var(--cream-100);background:radial-gradient(120% 90% at 50% 0%,#24351A,#16210F 60%,#0F1809)">' +
      pic("orchard-pano-dark", 840, 1536, "100vw", "", "", "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.32;mix-blend-mode:luminosity", true) +
      '<span aria-hidden="true" class="tks-amazigh" style="position:absolute;inset:0;opacity:.06"></span>' +
      '<div aria-hidden="true" class="tks-zig-band" style="position:absolute;top:0;left:0;right:0"></div>' +
      '<div class="tks-sig-grid" style="position:relative;max-width:1080px;margin:0 auto;padding:clamp(4rem,9vw,7.5rem) clamp(1.25rem,4vw,4rem);display:grid;grid-template-columns:minmax(220px,.8fr) 1.2fr;gap:clamp(2rem,5vw,4.5rem);align-items:center">' + seal(t, lang) + txt + '</div>' +
      '<div aria-hidden="true" class="tks-zig-band" style="position:absolute;bottom:0;left:0;right:0;transform:rotate(180deg)"></div>' +
    '</section>';
  }

  function editorial(t, lang) {
    var ar = lang === "ar";
    var collage = '<div style="order:' + (ar ? 2 : 1) + ';position:relative;padding-bottom:clamp(2rem,5vw,3.5rem);padding-inline-end:clamp(2rem,5vw,3.5rem)">' +
      '<div class="rv" data-rv="mask" style="border-radius:var(--radius-xl);overflow:hidden;box-shadow:var(--shadow-lg);aspect-ratio:4/5">' + pic("cluster-graded", 680, 1400, "(max-width:880px) 92vw, 48vw", "", t.ed_title, "width:100%;height:100%;object-fit:cover;display:block") + '</div>' +
      '<div class="rv" data-rv="mask" data-delay="220" style="position:absolute;inset-inline-end:0;bottom:0;width:46%;aspect-ratio:3/4;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lg);border:5px solid var(--cream-50)">' + pic("branches-graded", 420, 1400, "(max-width:880px) 42vw, 22vw", "", "", "width:100%;height:100%;object-fit:cover;display:block", true) + '</div>' +
    '</div>';
    var text = '<div style="order:' + (ar ? 1 : 2) + '">' +
      '<div class="rv tks-eyebrow" data-rv="up">' + t.ed_eyebrow + '</div>' +
      '<h2 class="rv" data-rv="up" data-delay="80" style="font-family:var(--display-font);font-weight:400;font-size:clamp(2.2rem,4.4vw,3.6rem);line-height:1.04;color:var(--ink-900);margin:.6rem 0 0;max-width:16ch">' + t.ed_title + '</h2>' +
      '<p class="rv" data-rv="up" data-delay="160" style="font-family:var(--font-editorial);font-size:clamp(1.15rem,1.7vw,1.4rem);line-height:1.72;color:var(--text-secondary);margin:1.4rem 0 0;max-width:44ch">' + t.ed_body + '</p>' +
      '<div class="rv" data-rv="up" data-delay="240" style="display:flex;flex-wrap:wrap;align-items:center;gap:1rem;margin-top:1.8rem">' +
        '<span style="display:inline-flex;align-items:center;gap:.5rem;font-family:var(--ui-font);font-size:.85rem;font-weight:600;color:var(--clay-700);background:var(--clay-100);padding:.45rem .9rem;border-radius:var(--radius-pill)">' + ICON.clock + t.ed_note + '</span>' +
        '<span style="font-family:var(--ui-font);font-size:.85rem;color:var(--text-muted)">' + t.ed_caption + '</span>' +
      '</div></div>';
    return '<section id="fruit" class="tks-grain" style="background:var(--cream-50);border-top:1px solid var(--border-default);position:relative">' +
      '<div class="tks-ed-grid" style="max-width:1320px;margin:0 auto;padding:clamp(4rem,8vw,7rem) clamp(1.25rem,4vw,4rem);display:grid;grid-template-columns:1fr 1.04fr;gap:clamp(2rem,5vw,5rem);align-items:center">' + collage + text + '</div>' +
    '</section>';
  }

  function mapSvg(t, lang) {
    var ar = lang === "ar";
    var towns = [
      { x: 96, y: 150, n: "Korbous", a: "قربص" }, { x: 88, y: 205, n: "Soliman", a: "سليمان" },
      { x: 214, y: 250, n: "Nabeul", a: "نابل" }, { x: 184, y: 292, n: "Hammamet", a: "الحمامات" },
      { x: 322, y: 140, n: "Kelibia", a: "قليبية" }
    ];
    var sea = ar ? { t: "خليج تونس", h: "خليج الحمامات", m: "البحر الأبيض المتوسط" } : { t: "Golfe de Tunis", h: "Golfe de Hammamet", m: "Mer Méditerranée" };
    var tDots = towns.map(function (p) {
      return '<circle cx="' + p.x + '" cy="' + p.y + '" r="2.6" fill="#6E7763"/><text x="' + (ar ? p.x - 6 : p.x + 6) + '" y="' + (p.y + 3.5) + '" text-anchor="' + (ar ? "end" : "start") + '" style="font-family:var(--ui-font);font-size:10px;font-weight:500" fill="#4B5443">' + (ar ? p.a : p.n) + '</text>';
    }).join("");
    return '<svg viewBox="0 0 440 360" width="100%" style="display:block" role="img" aria-label="' + t.map_label + '">' +
      '<defs><linearGradient id="ms" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#DCEAF2"/><stop offset="1" stop-color="#BCD6E6"/></linearGradient>' +
      '<linearGradient id="ml" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EFE6CC"/><stop offset="0.55" stop-color="#E4D7B4"/><stop offset="1" stop-color="#D9C9A0"/></linearGradient>' +
      '<filter id="msh" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="3" stdDeviation="5" flood-color="#1E2A1B" flood-opacity="0.18"/></filter>' +
      '<pattern id="mg" width="34" height="34" patternUnits="userSpaceOnUse"><path d="M34 0H0V34" fill="none" stroke="#8FB6D4" stroke-width="0.5" opacity="0.35"/></pattern></defs>' +
      '<rect width="440" height="360" fill="url(#ms)"/><rect width="440" height="360" fill="url(#mg)"/>' +
      '<path d="M0 360 L0 250 C30 270 40 300 48 360 Z" fill="url(#ml)" opacity="0.5"/>' +
      '<path filter="url(#msh)" fill="url(#ml)" stroke="#C2AC79" stroke-width="1.5" stroke-linejoin="round" d="M40 300 C60 250 70 210 95 175 C120 140 150 110 200 80 C250 55 300 46 350 60 L392 52 C382 92 360 112 335 136 C300 170 270 200 240 235 C216 264 196 290 176 314 L120 322 C90 322 60 314 40 300 Z"/>' +
      '<path d="M95 175 C120 140 150 110 200 80 C250 55 300 46 350 60" fill="none" stroke="#fff" stroke-width="1.2" opacity="0.5"/>' +
      '<text x="40" y="135" style="font-family:var(--font-editorial);font-style:italic;font-size:11px" fill="#5E86A6" opacity="0.85">' + sea.t + '</text>' +
      '<text x="232" y="338" style="font-family:var(--font-editorial);font-style:italic;font-size:11px" fill="#5E86A6" opacity="0.85">' + sea.h + '</text>' +
      '<text x="300" y="32" style="font-family:var(--font-editorial);font-style:italic;font-size:10px" fill="#5E86A6" opacity="0.7">' + sea.m + '</text>' +
      '<g transform="translate(406,300)" opacity="0.8"><circle r="15" fill="rgba(255,253,247,0.85)" stroke="#C2AC79" stroke-width="1"/><path d="M0 -11 L3.2 0 L0 4 L-3.2 0 Z" fill="#BB4A30"/><path d="M0 11 L3.2 0 L0 4 L-3.2 0 Z" fill="#6E7763"/><text x="0" y="-17" text-anchor="middle" style="font-family:var(--ui-font);font-size:8px;font-weight:700" fill="#1E2A1B">N</text></g>' +
      tDots +
      '<g transform="translate(168,138)"><circle class="tks-pin-pulse" r="16" fill="#BB4A30" opacity="0.2"/><path d="M0 16 C-11 3 -11 -10 0 -10 C11 -10 11 3 0 16 Z" fill="#BB4A30" stroke="#fff" stroke-width="1.5"/><text x="0" y="-1" text-anchor="middle" style="font-family:\'Noto Sans Tifinagh\',sans-serif;font-size:11px" fill="#FBF6EA">ⵣ</text><text x="0" y="32" text-anchor="middle" style="font-family:var(--display-font);font-size:16px" fill="#1E2A1B">' + (ar ? "تاكلسة" : "Takelsa") + '</text></g>' +
    '</svg>';
  }

  function mapCard(t, lang) {
    var ar = lang === "ar";
    return '<a href="' + CONTACT.maps + '" target="_blank" rel="noopener" class="tks-map" style="display:block;text-decoration:none;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-soft);box-shadow:var(--shadow-md);background:var(--bg-card);transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)">' +
      mapSvg(t, lang) +
      '<div style="display:flex;align-items:center;justify-content:space-between;gap:.75rem;padding:.95rem 1.2rem;border-top:1px solid var(--border-soft)">' +
        '<span style="font-family:var(--ui-font);font-weight:600;font-size:.92rem;color:var(--text-primary)">' + t.map_label + '<span style="display:block;font-weight:400;font-size:.78rem;color:var(--text-muted);direction:ltr;text-align:' + (ar ? "right" : "left") + '">' + CONTACT.coords + '</span></span>' +
        '<span style="display:inline-flex;align-items:center;gap:.4rem;flex:none;font-family:var(--ui-font);font-weight:600;font-size:.85rem;color:var(--text-brand)">' + t.map_cta + '<span style="transform:' + (ar ? "scaleX(-1)" : "none") + ';display:inline-flex">' + ICON.pin + '</span></span>' +
      '</div></a>';
  }

  function channel(tone, title, sub, href, primary, small, lang) {
    var ar = lang === "ar";
    var tones = { fb: { bg: "#0866FF", fg: "#fff", ic: ICON.fbBig }, phone: { bg: "var(--ink-900)", fg: "var(--cream-100)", ic: ICON.phone }, wa: { bg: "#25D366", fg: "#053D24", ic: ICON.wa } };
    var g = tones[tone];
    return '<a href="' + href + '" target="_blank" rel="noopener" class="tks-channel" style="display:flex;align-items:center;gap:1rem;text-decoration:none;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);padding:' + (small ? ".85rem 1.1rem" : "1.2rem 1.3rem") + ';box-shadow:' + (primary ? "var(--shadow-md)" : "var(--shadow-xs)") + ';transition:transform var(--dur-base) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)">' +
      '<span style="display:flex;align-items:center;justify-content:center;flex:none;width:' + (small ? "42px" : "52px") + ';height:' + (small ? "42px" : "52px") + ';border-radius:var(--radius-md);background:' + g.bg + ';color:' + g.fg + '">' + g.ic + '</span>' +
      '<span style="flex:1"><span style="display:block;font-family:var(--ui-font);font-weight:700;font-size:' + (small ? "1rem" : "1.15rem") + ';color:var(--text-primary)">' + title + '</span><span style="display:block;font-family:var(--ui-font);font-size:.85rem;color:var(--text-muted);margin-top:.1rem;direction:ltr;text-align:' + (ar ? "right" : "left") + '">' + sub + '</span></span>' +
      '<span style="color:var(--text-muted);flex:none;transform:' + (ar ? "scaleX(-1)" : "none") + '">' + ICON.arrow + '</span></a>';
  }

  function contact(t, lang) {
    var left = '<div class="rv" data-rv="up">' +
      '<div class="tks-eyebrow">' + t.contact_eyebrow + '</div>' +
      '<h2 style="font-family:var(--display-font);font-weight:400;font-size:clamp(2.2rem,4vw,3.2rem);margin:.6rem 0 1rem">' + t.contact_title + '</h2>' +
      '<p style="font-family:var(--font-editorial);font-size:1.2rem;line-height:1.7;color:var(--text-secondary);max-width:42ch;margin-bottom:1.6rem">' + t.contact_sub + '</p>' +
      '<div style="max-width:400px">' + mapCard(t, lang) + '</div></div>';
    var right = '<div class="rv" data-rv="up" data-delay="120" style="display:flex;flex-direction:column;gap:.85rem">' +
      channel("fb", t.c_fb, t.c_fb_sub, CONTACT.facebook, true, false, lang) +
      channel("phone", t.c_phone, CONTACT.phone1_h + " · " + CONTACT.phone2_h, "tel:" + CONTACT.phone1, false, false, lang) +
      channel("wa", t.c_wa, t.c_wa_sub, CONTACT.whatsapp, false, true, lang) + '</div>';
    return '<section id="contact" style="background:var(--bg-page)"><div style="max-width:1320px;margin:0 auto;padding:clamp(3.5rem,7vw,6rem) clamp(1.25rem,4vw,4rem)"><div class="tks-contact-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,5vw,4rem);align-items:start">' + left + right + '</div></div></section>';
  }

  function footer(t, lang) {
    var ar = lang === "ar";
    var oil = '<p style="margin:1.1rem 0 0;padding-top:1.1rem;border-top:1px solid rgba(231,220,192,.14)"><a href="' + CONTACT.oil_url + '" target="_blank" rel="noopener" class="tks-oil-link" style="display:inline-flex;align-items:center;gap:.45rem;color:var(--stone-300);font-family:var(--font-editorial);font-style:italic;font-size:.92rem;text-decoration:none;transition:color var(--dur-fast) var(--ease-out)"><span class="tks-yaz" style="font-style:normal;font-size:.95rem;color:var(--clay-300)">ⵣ</span>' + t.footer_oil + '<span style="transform:' + (ar ? "scaleX(-1)" : "none") + ';display:inline-block">→</span></a></p>';
    return '<footer style="background:var(--ink-900);color:var(--cream-100)"><div style="max-width:1320px;margin:0 auto;padding:clamp(2.5rem,5vw,3.5rem) clamp(1.25rem,4vw,4rem);display:flex;flex-wrap:wrap;gap:1.5rem 3rem;justify-content:space-between;align-items:flex-start">' +
      '<div><span style="display:inline-flex;align-items:center;gap:.7rem"><span style="position:relative;width:50px;height:50px;border-radius:50%;border:2px solid var(--clay-300);display:inline-flex;align-items:center;justify-content:center"><span style="position:absolute;inset:5px;border-radius:50%;border:1px dashed var(--clay-300);opacity:.55"></span><span class="tks-yaz" style="font-size:1.5rem;color:var(--clay-300)">ⵣ</span></span><span style="font-family:var(--display-font);font-size:1.4rem;letter-spacing:' + (ar ? "0" : ".14em") + ';color:var(--cream-50)">' + (ar ? "تاكلسة" : "TAKELSA") + '</span></span>' +
      '<p style="margin:.8rem 0 0;color:var(--pear-300);font-family:var(--ui-font);font-weight:600;font-size:.9rem">' + t.footer_tag + '</p></div>' +
      '<div style="max-width:44ch"><p style="margin:0;color:var(--stone-300);font-family:var(--font-editorial);font-size:.95rem;line-height:1.6">' + t.footer_note + '</p>' +
      '<p style="margin:.8rem 0 0;color:var(--stone-400);font-family:var(--ui-font);font-size:.85rem;line-height:1.7">' + t.footer_producer_l1 + '<br>' + t.footer_producer_l2 + '</p>' +
      '<a href="' + CONTACT.maps + '" target="_blank" rel="noopener" style="display:inline-block;margin-top:.5rem;color:var(--pear-300);font-family:var(--ui-font);font-size:.85rem;text-decoration:none">' + CONTACT.coords + '</a>' + oil + '</div>' +
    '</div></footer>';
  }

  function render(lang) {
    var t = COPY[lang];
    var app = document.getElementById("app");
    app.setAttribute("dir", t.dir);
    app.setAttribute("lang", lang);
    app.className = "tks-app";
    app.innerHTML = header(t, lang) + hero(t, lang) + signature(t, lang) + editorial(t, lang) + contact(t, lang) + footer(t, lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", t.dir);
    initEnhancements();
  }

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveals() {
    if (prefersReduced) return;
    var els = [].slice.call(document.querySelectorAll(".rv"));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.remove("is-hidden"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    var vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(function (el) {
      var d = el.getAttribute("data-delay");
      if (d) el.style.transitionDelay = d + "ms";
      if (el.getBoundingClientRect().top < vh * 0.9) return; // in view → stay visible
      el.classList.add("is-hidden");
      io.observe(el);
      setTimeout(function () { el.classList.remove("is-hidden"); io.unobserve(el); }, 1600 + (parseInt(d || 0, 10)));
    });
  }

  var scrollBound = false;
  function initEnhancements() {
    initReveals();
    var header = document.getElementById("tks-header");
    var frame = document.getElementById("tks-heroframe");
    var onScroll = function () {
      var y = window.scrollY;
      if (header) {
        var s = y > 24;
        header.style.background = s ? "color-mix(in srgb, var(--cream-100) 90%, transparent)" : "transparent";
        header.style.backdropFilter = s ? "blur(12px)" : "none";
        header.style.webkitBackdropFilter = s ? "blur(12px)" : "none";
        header.style.borderBottomColor = s ? "var(--border-default)" : "transparent";
        header.style.padding = s ? ".6rem clamp(1.25rem,4vw,4rem)" : "1rem clamp(1.25rem,4vw,4rem)";
      }
      if (frame && !prefersReduced) frame.style.transform = "translateY(" + (y * -0.03) + "px)";
    };
    window.removeEventListener("scroll", window.__tksScroll || function () {});
    window.__tksScroll = function () { window.requestAnimationFrame(onScroll); };
    window.addEventListener("scroll", window.__tksScroll, { passive: true });
    onScroll();
    var btn = document.getElementById("tks-lang");
    if (btn) btn.addEventListener("click", function () {
      var cur = document.getElementById("app").getAttribute("lang");
      render(cur === "fr" ? "ar" : "fr");
      window.scrollTo(0, 0);
    });
  }

  document.addEventListener("DOMContentLoaded", function () { render("ar"); });
})();
