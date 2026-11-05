import React from 'react';
import { useFeature1 } from '../hooks/useFeature1';
import { Button } from '@/components/ui/Button';
import { Spinner } from '@/components/feedback/Spinner';
import { useAppStore } from '@/store/useAppStore';

export const Feature1Card: React.FC = () => {
  const { data, loading } = useFeature1();
  const { counter, increment } = useAppStore();

  if (loading) {
    return (
      <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 flex justify-center">
        <Spinner size="md" />
      </div>
    );
  }

  return (
    <div className="p-6 bg-slate-900/80 backdrop-blur rounded-xl border border-slate-800 text-left shadow-xl hover:border-slate-700 transition-all">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-slate-100 text-lg">{data?.title}</h3>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {data?.status}
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{data?.description}</p>

      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-mono">Store Counter: {counter}</span>
        <Button size="sm" onClick={increment}>
          Increment State
        </Button>
      </div>
    </div>
  );
};
