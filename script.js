// ===== i18n: EN / ID / JP =====
const translations = {
    en: {
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.eyebrow': "Hello, I'm",
        'hero.role': 'Mobile Developer',
        'hero.bio': 'I build clean, thoughtful Android experiences with Kotlin & Jetpack Compose. Currently crafting apps that people actually enjoy using.',
        'hero.cv': 'View CV',
        'hero.touch': 'Get in touch',
        'stack.title': 'Tech I work with',
        'projects.eyebrow': 'Selected Work',
        'projects.title': 'Recent Projects',
        'projects.eabsensi.desc': 'E-Attendance using geofencing and geolocation for accurate attendance recording.',
        'projects.tunehive.desc': 'Music app for indie artists to share their music and connect, with ML-based song recommendations.',
        'projects.mirunime.desc': 'Modern anime-tracking application allowing users to browse and search efficiently.',
        'projects.readwish.desc': 'Book reading app to search, save, and manage books from the Gutenberg Library API.',
        'projects.wip': 'In progress…',
        'projects.soon': 'Coming soon',
        'projects.github': 'View on GitHub →',
        'exp.eyebrow': 'Background',
        'exp.title': 'Experience',
        'exp.ulin.meta': 'Aug 2026 – Sep 2026 · Internship',
        'exp.ulin.role': 'Information Technology Intern',
        'exp.ulin.company': 'RSUD Ulin (Ulin Regional General Hospital)',
        'exp.ulin.desc': 'Provided IT support through hardware and software troubleshooting, system installation and configuration, HMIS data management, and system maintenance and optimization.',
        'exp.intern.meta': 'Jul 2025 – Dec 2025 · Internship',
        'exp.intern.role': 'Information Technology Intern',
        'exp.intern.company': 'Banjarmasin Department of Food Security, Agriculture and Fisheries',
        'exp.intern.desc': 'Led the development of a geofencing-based e-attendance system, designed web and mobile UI, developed the mobile application, supported data management, and participated in stakeholder and community field activities.',
        'exp.bangkit.meta': 'Sep 2024 – Jan 2025 · Cohort',
        'exp.bangkit.role': 'Mobile Development Cohort',
        'exp.bangkit.company': 'Bangkit Academy',
        'exp.bangkit.desc': 'Completed the Mobile Development learning path focused on Android (Kotlin), modern app architecture, API integration, and team-based capstone projects.',
        'exp.assistant.meta': '2023 – 2025 · Laboratory Assistant',
        'exp.assistant.role': 'Programming Laboratory Assistant',
        'exp.assistant.company': 'Lambung Mangkurat University · 3 Terms',
        'exp.assistant.desc': 'Assisted students across three courses: Introduction to Programming, Mobile Programming, and Data Structures & Algorithms — guiding lab sessions, reviewing assignments, and mentoring fundamentals.',
        'exp.edu.meta': "2022 – Present · Bachelor's Degree",
        'exp.edu.role': 'Information Technology',
        'exp.edu.company': 'Lambung Mangkurat University',
        'exp.edu.desc': 'Undergraduate student concentrating in Management Information Systems.',
        'contact.eyebrow': 'Say hi',
        'contact.title': 'Contact Me',
        'contact.message': 'Your message…',
        'contact.send': 'Send message'
    },
    id: {
        'nav.about': 'Tentang',
        'nav.projects': 'Proyek',
        'nav.experience': 'Pengalaman',
        'nav.contact': 'Kontak',
        'hero.eyebrow': 'Halo, saya',
        'hero.role': 'Mobile Developer',
        'hero.bio': 'Saya membangun pengalaman Android yang bersih dan melalui perencanaan matang dengan Kotlin & Jetpack Compose. Saat ini sedang membuat aplikasi yang benar-benar nyaman digunakan.',
        'hero.cv': 'Lihat CV',
        'hero.touch': 'Hubungi saya',
        'stack.title': 'Teknologi yang saya gunakan',
        'projects.eyebrow': 'Karya Pilihan',
        'projects.title': 'Proyek Terbaru',
        'projects.eabsensi.desc': 'E-Attendance menggunakan geofencing dan geolokasi untuk pencatatan kehadiran yang akurat.',
        'projects.tunehive.desc': 'Aplikasi musik untuk musisi indie agar lebih mudah membagikan karyanya dan terhubung, dengan rekomendasi lagu berbasis machine learning.',
        'projects.mirunime.desc': 'Aplikasi pelacak anime modern yang memungkinkan pengguna menjelajah dan mencari dengan efisien.',
        'projects.readwish.desc': 'Aplikasi membaca buku untuk mencari, menyimpan, dan mengelola buku dari Gutenberg Library API.',
        'projects.wip': 'Sedang dikerjakan…',
        'projects.soon': 'Segera hadir',
        'projects.github': 'Lihat di GitHub →',
        'exp.eyebrow': 'Latar Belakang',
        'exp.title': 'Pengalaman',
        'exp.ulin.meta': 'Agu 2026 – Sep 2026 · Magang',
        'exp.ulin.role': 'Magang Teknologi Informasi',
        'exp.ulin.company': 'RSUD Ulin (Rumah Sakit Umum Daerah Ulin)',
        'exp.ulin.desc': 'Memberikan dukungan TI melalui penanganan masalah perangkat keras dan perangkat lunak, instalasi dan konfigurasi sistem, pengelolaan data SIMRS, serta pemeliharaan dan optimalisasi sistem.',
        'exp.intern.meta': 'Jul 2025 – Des 2025 · Magang',
        'exp.intern.role': 'Magang Teknologi Informasi',
        'exp.intern.company': 'Dinas Ketahanan Pangan, Pertanian dan Perikanan Banjarmasin',
        'exp.intern.desc': 'Memimpin pengembangan sistem e-attendance berbasis geofencing, merancang UI web dan mobile, mengembangkan aplikasi mobile, mendukung pengelolaan data, serta berpartisipasi dalam kegiatan bersama pemangku kepentingan dan kegiatan lapangan masyarakat.',
        'exp.bangkit.meta': 'Sep 2024 – Jan 2025 · Kohort',
        'exp.bangkit.role': 'Kohort Pengembangan Mobile',
        'exp.bangkit.company': 'Bangkit Academy',
        'exp.bangkit.desc': 'Menyelesaikan jalur belajar Mobile Development yang berfokus pada Android (Kotlin), arsitektur aplikasi modern, integrasi API, dan proyek capstone berbasis tim.',
        'exp.assistant.meta': '2023 – 2025 · Asisten Laboratorium',
        'exp.assistant.role': 'Asisten Laboratorium Pemrograman',
        'exp.assistant.company': 'Universitas Lambung Mangkurat · 3 Periode',
        'exp.assistant.desc': 'Mendampingi mahasiswa di tiga mata kuliah: Pengantar Pemrograman, Pemrograman Mobile, serta Struktur Data & Algoritma — memandu sesi laboratorium, mengevaluasi tugas, dan membimbing dasar-dasar pemrograman.',
        'exp.edu.meta': '2022 – Sekarang · Sarjana (S1)',
        'exp.edu.role': 'Teknologi Informasi',
        'exp.edu.company': 'Universitas Lambung Mangkurat',
        'exp.edu.desc': 'Mahasiswa sarjana dengan konsentrasi Sistem Informasi Manajemen.',
        'contact.eyebrow': 'Sapa saya',
        'contact.title': 'Hubungi Saya',
        'contact.message': 'Pesan Anda…',
        'contact.send': 'Kirim pesan'
    },
    ja: {
        'nav.about': '私について',
        'nav.projects': 'プロジェクト',
        'nav.experience': '経歴',
        'nav.contact': 'お問い合わせ',
        'hero.eyebrow': 'はじめまして、',
        'hero.role': 'モバイルデベロッパー',
        'hero.bio': 'KotlinとJetpack Composeを使って、シンプルで洗練されたAndroid体験を構築しています。現在は、実際に使って楽しいアプリづくりに取り組んでいます。',
        'hero.cv': '履歴書を見る',
        'hero.touch': 'お問い合わせ',
        'stack.title': '使用している技術',
        'projects.eyebrow': '主な作品',
        'projects.title': '最近のプロジェクト',
        'projects.eabsensi.desc': 'ジオフェンシングと位置情報を使用して、正確な勤怠記録を行うE-Attendanceアプリです。',
        'projects.tunehive.desc': 'インディーズアーティストが音楽を共有し、ファンとつながるための音楽アプリ。機械学習による楽曲レコメンド機能を搭載。',
        'projects.mirunime.desc': '効率的に閲覧・検索できるモダンなアニメトラッキングアプリです。',
        'projects.readwish.desc': 'Gutenberg Library APIから本を検索・保存・管理できる読書アプリです。',
        'projects.wip': '開発中…',
        'projects.soon': '近日公開',
        'projects.github': 'GitHubで見る →',
        'exp.eyebrow': 'バックグラウンド',
        'exp.title': '職歴',
        'exp.ulin.meta': '2026年8月 – 9月 · インターンシップ',
        'exp.ulin.role': 'ITインターン',
        'exp.ulin.company': 'ウリン州立総合病院（RSUD Ulin）',
        'exp.ulin.desc': 'ハードウェア・ソフトウェアのトラブルシューティング、システムのインストールと設定、SIMRSデータ管理、システムの保守・最適化を通じてITサポートを提供しました。',
        'exp.intern.meta': '2025年7月 – 12月 · インターンシップ',
        'exp.intern.role': 'ITインターン',
        'exp.intern.company': 'バンジャルマシン食料安全保障・農業・水産局',
        'exp.intern.desc': 'ジオフェンシング方式の勤怠管理システムの開発を主導し、WebおよびモバイルUIを設計、モバイルアプリケーションを開発、データ管理を支援するとともに、ステークホルダーや地域のフィールド活動にも参加しました。',
        'exp.bangkit.meta': '2024年9月 – 2025年1月 · コホート',
        'exp.bangkit.role': 'モバイル開発コホート',
        'exp.bangkit.company': 'Bangkit Academy',
        'exp.bangkit.desc': 'Android（Kotlin）、モダンなアプリアーキテクチャ、API連携、チームでのキャップストーンプロジェクトに焦点を当てたモバイル開発学習プログラムを修了しました。',
        'exp.assistant.meta': '2023年 – 2025年 · ラボアシスタント',
        'exp.assistant.role': 'プログラミング実習アシスタント',
        'exp.assistant.company': 'ランブン・マンクラット大学 · 3期',
        'exp.assistant.desc': 'プログラミング入門、モバイルプログラミング、データ構造とアルゴリズムの3科目において、実習の支援、課題のレビュー、基礎のメンタリングを行いました。',
        'exp.edu.meta': '2022年 – 現在 · 学士課程',
        'exp.edu.role': '情報技術',
        'exp.edu.company': 'ランブン・マンクラット大学',
        'exp.edu.desc': '経営情報システムを専攻する学部生。',
        'contact.eyebrow': 'ご連絡',
        'contact.title': 'お問い合わせ',
        'contact.message': 'メッセージ…',
        'contact.send': '送信する'
    }
};

const langBtns = document.querySelectorAll('.lang-btn');

function setLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.documentElement.lang = lang === 'id' ? 'id' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    localStorage.setItem('lang', lang);
}

langBtns.forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('lang') || 'en');

// ===== Mobile menu =====
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('open');
    });
});

// ===== Header background on scroll =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

// ===== Scroll reveal =====
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== Image lightbox =====
const modal = document.getElementById('img-modal');
const modalImg = document.getElementById('img-modal-content');

if (modal) {
    document.querySelectorAll('.project-img img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
        });
    });

    modal.addEventListener('click', () => modal.classList.remove('active'));

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') modal.classList.remove('active');
    });
}