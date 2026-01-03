export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-xs text-gray-400 leading-relaxed max-w-sm">
      <p className="mb-1">
        By clicking &quot;Get Started&quot;, you agree to our Terms and Conditions,
        Privacy Policy, and Subscription Terms.
      </p>
      <p>
        Fametonic &copy; {currentYear} EAS. All Rights Reserved.
      </p>
    </div>
  );
}
