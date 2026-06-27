"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactRequest } from "../../_serverless/contactActions";
import styles from "./ContactForm.module.css";

const initialState = {
  ok: null,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending request..." : "Send request"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactRequest, initialState);

  return (
    <form
      id="contact-form"
      className={styles.contactForm}
      action={formAction}
      aria-label="Request service from 904 Pools"
    >
      <div className={styles.formHeader}>
        <p>Request service</p>
        <h2>Tell us about your pool.</h2>
        <span>Share the pool type, service need, and best way to reach you.</span>
      </div>

      <div className={styles.fieldGrid}>
        <label>
          Name
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(904) 555-0123"
            required
          />
        </label>
      </div>

      <label>
        Service needed
        <select name="service" defaultValue="" required>
          <option value="" disabled>
            Select a service
          </option>
          <option>Weekly pool service</option>
          <option>Bi-weekly pool service</option>
          <option>One-time pool cleanup</option>
          <option>Green pool recovery</option>
          <option>Chemical service plan</option>
          <option>Commercial pool service</option>
          <option>Filter cleaning</option>
          <option>Stain or algae treatment</option>
        </select>
      </label>

      <label>
        Project details
        <textarea
          name="details"
          rows="4"
          placeholder="Briefly describe the pool, location, service timing, and any water, filter, stain, or algae concerns."
          required
        />
      </label>

      <SubmitButton />

      {state.message ? (
        <p className={state.ok ? styles.successMessage : styles.errorMessage}>
          {state.message}
        </p>
      ) : null}

      <p className={styles.formNote}>
        Prefer to talk now? <a href="tel:+19048670048">Call (904) 867-0048</a>.
      </p>
    </form>
  );
}
