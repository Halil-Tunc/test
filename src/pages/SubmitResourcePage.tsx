import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Submission = {
  id: string;
  name: string;
  desc: string;
  address?: string;
  phone?: string;
  website?: string;
  email?: string;
  tags: string[];
  accessibility: {
    wheelchair: boolean;
    bilingual: boolean;
    kidFriendly: boolean;
  };
  submittedAt: string;
};

const DEFAULT_TAGS = [
  "Food",
  "Housing",
  "Legal",
  "Healthcare",
  "Mental health",
  "Employment",
  "Education/ESL",
  "Transportation",
  "Youth/Teens",
  "Seniors",
  "Community",
  "Library",
  "Free",
  "Low-cost",
];

const STORAGE_KEY = "pflugerville_resource_submissions_v1";

export default function SubmitResourcePage() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const [wheelchair, setWheelchair] = useState(false);
  const [bilingual, setBilingual] = useState(false);
  const [kidFriendly, setKidFriendly] = useState(false);

  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const normalizedWebsite = useMemo(() => {
    const v = website.trim();
    if (!v) return "";
    if (v.startsWith("http://") || v.startsWith("https://")) return v;
    return `https://${v}`;
  }, [website]);

  function toggleTag(t: string) {
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  function addCustomTag() {
    const t = tagInput.trim();
    if (!t) return;
    if (!selectedTags.includes(t)) setSelectedTags((prev) => [...prev, t]);
    setTagInput("");
  }

  function validate(): string | null {
    if (!name.trim()) return "Please enter the resource name.";
    if (!desc.trim()) return "Please enter a short description.";
    if (desc.trim().length < 20)
      return "Description is a bit short — please write at least ~20 characters.";
    if (email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim()))
      return "Please enter a valid email (or leave it blank).";
    if (normalizedWebsite && !/^https?:\/\/\S+/i.test(normalizedWebsite))
      return "Please enter a valid website URL.";
    return null;
  }

  function saveSubmission(s: Submission) {
    const existingRaw = localStorage.getItem(STORAGE_KEY);
    const existing: Submission[] = existingRaw ? JSON.parse(existingRaw) : [];
    existing.unshift(s);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    const id = `sub_${Date.now()}_${Math.random().toString(16).slice(2)}`;

    const submission: Submission = {
      id,
      name: name.trim(),
      desc: desc.trim(),
      address: address.trim() || undefined,
      phone: phone.trim() || undefined,
      website: normalizedWebsite || undefined,
      email: email.trim() || undefined,
      tags: selectedTags.length ? selectedTags : ["Community"],
      accessibility: { wheelchair, bilingual, kidFriendly },
      submittedAt: new Date().toISOString(),
    };

    saveSubmission(submission);
    setSubmittedId(id);

    // clear form
    setName("");
    setDesc("");
    setAddress("");
    setPhone("");
    setWebsite("");
    setEmail("");
    setWheelchair(false);
    setBilingual(false);
    setKidFriendly(false);
    setSelectedTags([]);
    setTagInput("");
  }

  return (
    <section className="section">
      <div className="section__head">
        <h2>Submit a Resource</h2>
        <Link className="section__link" to="/">
          Back to home
        </Link>
      </div>

      <p className="muted small" style={{ marginTop: 0 }}>
        Know a program, nonprofit, or service that should be listed? Submit it
        here. We’ll review and add it to the hub.
      </p>

      {submittedId && (
        <div className="notice success" role="status">
          <strong>Thanks!</strong> Your suggestion was received. Reference ID:{" "}
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {submittedId}
          </span>
        </div>
      )}

      {error && (
        <div className="notice error" role="alert">
          {error}
        </div>
      )}

      <form className="form" onSubmit={onSubmit}>
        <div className="formgrid">
          <div className="field">
            <label>Resource name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Example: Pflugerville Food Pantry"
            />
          </div>

          <div className="field">
            <label>Website</label>
            <input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="example.org"
            />
          </div>

          <div className="field full">
            <label>Description *</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="What does this resource offer? Who is it for? Any requirements?"
              rows={4}
            />
          </div>

          <div className="field">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street address (if applicable)"
            />
          </div>

          <div className="field">
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(512) 555-1234"
            />
          </div>

          <div className="field full">
            <label>Your email (optional)</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="So we can follow up if needed"
            />
          </div>
        </div>

        <div className="formrow">
          <div className="formrow__title">Accessibility & Services</div>
          <div className="checks">
            <label className="checkpill">
              <input
                type="checkbox"
                checked={wheelchair}
                onChange={(e) => setWheelchair(e.target.checked)}
              />
              Wheelchair accessible
            </label>
            <label className="checkpill">
              <input
                type="checkbox"
                checked={bilingual}
                onChange={(e) => setBilingual(e.target.checked)}
              />
              Bilingual services
            </label>
            <label className="checkpill">
              <input
                type="checkbox"
                checked={kidFriendly}
                onChange={(e) => setKidFriendly(e.target.checked)}
              />
              Kid-friendly
            </label>
          </div>
        </div>

        <div className="formrow">
          <div className="formrow__title">Tags</div>
          <div className="tagpicker">
            {DEFAULT_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                className={`tagpick ${selectedTags.includes(t) ? "on" : ""}`}
                onClick={() => toggleTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="tagadd">
            <input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add a custom tag (e.g., 'Disability Services')"
            />
            <button
              type="button"
              className="btn btn-outline"
              onClick={addCustomTag}
            >
              Add tag
            </button>
          </div>

          {selectedTags.length > 0 && (
            <div className="muted small" style={{ marginTop: 6 }}>
              Selected: {selectedTags.join(", ")}
            </div>
          )}
        </div>

        <div className="formactions">
          <button className="btn" type="submit">
            Submit resource
          </button>
          <Link className="btn btn-outline" to="/resources">
            View resources
          </Link>
        </div>

        <p className="muted small" style={{ marginTop: 10 }}>
          Submissions are stored locally in this demo environment
          (localStorage). For a real deployment, this would send to a database
          or a Google Form.
        </p>
      </form>
    </section>
  );
}
