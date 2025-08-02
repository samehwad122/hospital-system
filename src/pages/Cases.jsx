import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { FaTrash, FaEdit } from 'react-icons/fa';
import '../index.css';

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    diagnosis: '',
    status: '',
  });

  useEffect(() => {
    fetchCases();
  }, []);

  async function fetchCases() {
    const { data, error } = await supabase
      .from('cases')
      .select('id, diagnosis, status');

    if (error) {
      console.error('Fetch error:', error.message);
    } else {
      setCases(data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.diagnosis || !formData.status) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingId) {
      const { data, error } = await supabase
        .from('cases')
        .update({
          diagnosis: formData.diagnosis.trim(),
          status: formData.status.trim(),
        })
        .eq('id', editingId);

      if (error) {
        console.error('Update error:', error.message);
      } else {
        setEditingId(null);
        setFormData({ diagnosis: '', status: '' });
        fetchCases();
      }
    } else {
      const { data, error } = await supabase.from('cases').insert([
        {
          diagnosis: formData.diagnosis.trim(),
          status: formData.status.trim(),
        },
      ]);

      if (error) {
        console.error('Insert error:', error.message);
      } else {
        setFormData({ diagnosis: '', status: '' });
        fetchCases();
      }
    }
  }

  function handleEdit(caseItem) {
    setFormData({
      diagnosis: caseItem.diagnosis,
      status: caseItem.status,
    });
    setEditingId(caseItem.id);
  }

  async function handleDelete(id) {
    const { error } = await supabase.from('cases').delete().eq('id', id);
    if (!error) fetchCases();
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-[var(--main-color)]">
        {editingId ? 'Edit Case' : 'Cases'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md ">
        <input
          type="text"
          placeholder="Diagnosis"
          value={formData.diagnosis}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, diagnosis: e.target.value }))
          }
          className="w-full border p-2 rounded"
          required
        />

        <select
          value={formData.status}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, status: e.target.value }))
          }
          className="w-full border p-2 rounded "
          required
        >
          <option value="">Select Status</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          className="bg-[var(--main-color)]  text-white px-4 py-2 rounded"
        >
          {editingId ? 'Update Case' : 'Add Case'}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ diagnosis: '', status: '' });
            }}
            className="ml-4 text-sm text-gray-600 underline"
          >
            Cancel Editing
          </button>
        )}
      </form>

      <h2 className="text-2xl font-bold mt-10 mb-2 text-[var(--main-color)]">Cases Table</h2>
      <table className="min-w-full border text-center">
        <thead className="bg-[var(--main-color)] text-white">
          <tr>
            <th className="p-2">Diagnosis</th>
            <th className="p-2">Status</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id} className="border-b text-[var(--main-color)]">
              <td className="p-2">{c.diagnosis}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2 flex justify-center gap-3">
                <button
                  onClick={() => handleEdit(c)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(c.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          {cases.length === 0 && (
            <tr>
              <td colSpan="3" className="py-4 text-[var(--main-color)]">
                No cases found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
