export type SkillGroupKey = 'data' | 'ml' | 'mlops' | 'analytics';

export type SkillItem = {
  name: string;
  icon?: string;
  color?: string;
};

export type SkillGroup = {
  key: SkillGroupKey;
  tint: string;
  items: SkillItem[];
};

// `icon` slugs map to entries in `src/components/TechIcon.astro`.
// `color` is the brand colour applied to the icon (falls back to currentColor).
export const skills: SkillGroup[] = [
  {
    key: 'data',
    tint: '#06b6d4',
    items: [
      { name: 'Python', icon: 'python', color: '#3776AB' },
      { name: 'SQL', icon: 'sql', color: '#06b6d4' },
      { name: 'Pandas', icon: 'pandas', color: '#150458' },
      { name: 'NumPy', icon: 'numpy', color: '#4D77CF' },
      { name: 'Jupyter', icon: 'jupyter', color: '#F37626' },
      { name: 'Git / GitHub', icon: 'git', color: '#F05032' },
      { name: 'Matplotlib · Seaborn', icon: 'plotly', color: '#3F4F75' },
      { name: 'Plotly · Dash', icon: 'plotly', color: '#3F4F75' },
    ],
  },
  {
    key: 'ml',
    tint: '#a855f7',
    items: [
      { name: 'scikit-learn', icon: 'scikitlearn', color: '#F7931E' },
      { name: 'XGBoost', icon: 'xgboost', color: '#EC6B23' },
      { name: 'TensorFlow', icon: 'tensorflow', color: '#FF6F00' },
      { name: 'PyTorch', icon: 'pytorch', color: '#EE4C2C' },
      { name: 'Hugging Face', icon: 'huggingface', color: '#FFD21E' },
      { name: 'Prophet · RNN', icon: 'prophet', color: '#0A66C2' },
      { name: 'OpenAI · Claude', icon: 'openai', color: '#10A37F' },
      { name: 'Claude Code', icon: 'anthropic', color: '#D97757' },
      { name: 'Cursor', icon: 'cursor', color: '#d4d4d4' },
      { name: 'Ollama', icon: 'ollama', color: '#a1a1aa' },
      { name: 'LM Studio', icon: 'lmstudio', color: '#4338CA' },
      { name: 'NLP & LLM', color: '#a855f7' },
    ],
  },
  {
    key: 'mlops',
    tint: '#10b981',
    items: [
      { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'GCP Cloud Run', icon: 'googlecloud', color: '#4285F4' },
      { name: 'Streamlit', icon: 'streamlit', color: '#FF4B4B' },
      { name: 'GitHub Actions', icon: 'githubactions', color: '#2088FF' },
      { name: 'Vercel', icon: 'vercel', color: '#ffffff' },
      { name: 'n8n', icon: 'n8n', color: '#EA4B71' },
      { name: 'Make', icon: 'make', color: '#6D00CC' },
    ],
  },
  {
    key: 'analytics',
    tint: '#f59e0b',
    items: [
      { name: 'Google Analytics', color: '#E37400' },
      { name: 'Tag Manager', color: '#246FDB' },
      { name: 'Google Ads', color: '#4285F4' },
      { name: 'A/B testing · KPI', color: '#f59e0b' },
      { name: 'Marketing Automation', color: '#ec4899' },
      { name: 'SEO / SEA', color: '#10b981' },
      { name: 'LPD / RGPD', color: '#6366f1' },
    ],
  },
];

// Soft skills get a rotating colour palette so they pop visually.
export const softSkillColors = ['#ec4899', '#06b6d4', '#a855f7', '#f59e0b', '#10b981', '#6366f1'];
