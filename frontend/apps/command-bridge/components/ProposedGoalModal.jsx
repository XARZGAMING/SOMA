import React from 'react';
import { CheckCircle, XCircle, Target, ArrowRight } from 'lucide-react';

const ProposedGoalModal = ({ proposedGoals, onApprove, onReject, onClose }) => {
  if (proposedGoals.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="bg-[#151518] border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl p-6" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <Target className="w-5 h-5 mr-2 text-blue-400" /> Proposed Goals
          </h3>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <XCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {proposedGoals.map(goal => (
            <div key={goal.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col">
              <div className="flex items-center mb-2">
                <Target className="w-4 h-4 mr-2 text-blue-300" />
                <h4 className="text-lg font-semibold text-white">{goal.title}</h4>
              </div>
              <p className="text-zinc-400 text-sm mb-3">{goal.description || 'No description provided.'}</p>

              <div className="flex justify-end space-x-3 mt-auto">
                <button
                  onClick={() => onReject(goal.id)}
                  className="px-4 py-2 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center"
                >
                  <XCircle className="w-4 h-4 mr-2" /> Reject
                </button>
                <button
                  onClick={() => onApprove(goal.id)}
                  className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-2" /> Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposedGoalModal;