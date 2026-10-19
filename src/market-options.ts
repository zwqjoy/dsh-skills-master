/** Public SkillHub category and sort keys; shared by Host and Client. */
export const marketCategories = [
  ['office-efficiency', '办公效率'], ['content-creation', '内容创作'],
  ['dev-programming', '开发编程'], ['data-analysis', '数据分析'],
  ['design-media', '设计多媒体'], ['ai-agent', 'AI Agent'],
  ['knowledge-management', '知识管理'], ['business-ops', '商业运营'],
  ['education', '教育学习'], ['professional', '行业专业'],
  ['it-ops-security', 'IT 运维与安全'], ['life-service', '生活服务'],
] as const;
export const marketSorts = [['score', '综合评分'], ['downloads', '下载量'], ['updated_at', '最近更新'], ['stars', '收藏量']] as const;
export const categoryLabel = (key: string) => marketCategories.find(([id]) => id === key)?.[1] ?? key;

/** Prevent an updated Client from silently consuming the old Host response. */
export const marketContractVersion = 2;
